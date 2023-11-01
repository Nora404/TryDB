import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiomService } from './biom.service';
import { KeyboardEventService } from 'src/app/keyboard-event.service';
import { Biom, EmptyBiom } from '../db/biom';
import { LayoutService } from '../layout/layout.service';
import { BehaviorSubject } from 'rxjs';
import { EventDialogComponent } from '../event/event-dialog/event-dialog.component';
import { eventActions } from '../db/actions';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, EventDialogComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Output() currentTile: EventEmitter<Biom> = new EventEmitter<Biom>();
  @Input()
  set actionID(id: number) {
    this.executeAction(id);
  };

  // Das ist die Karte, ein Mehrdimensionales Array
  // [[1,2,3][1,2,3]] Diese Karte ist 2x3 Kacheln groß
  map: Biom[][] = [[]];

  // Die Position der Karte, in Pixeln
  // Es bestimmt den Startpunkt
  top: number = 0;
  left: number = 0;

  currentCoordinate2: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([this.left, this.top]);

  // Die Größe der Kacheln, in Pixeln
  size: number = 50 * 1.5;

  // Die Größe des sichtbaren Spielfeldes
  // der Multiplikator (ungerade) sind die gewünschten Kacheln
  playgroundWidth: number = this.size * 7;
  playgroundHeight: number = this.size * 5;

  // Die Anzahl der Kacheln auf der gesamten Karte 
  maxWidth: number = this.map.length;
  maxHeight: number = this.map[0].length;

  // Die Anzahl der Kacheln auf dem sichtbaren Spielfeld
  tileWidth: number = this.playgroundWidth / this.size;
  tileHeight: number = this.playgroundHeight / this.size;

  // Die Kacheln (z.B. 4/5) genau in der Mitte des sichtbaren Spielfeldes
  tileMiddelWidth: number = Math.round(this.tileWidth / 2);
  tileMiddelHeigth: number = Math.round(this.tileHeight / 2);

  imgUrl: string = '../../../assets/mapIcons/';


  // -------------------------------------------------------------------------------



  // -------------------------------------------------------------------------------

  constructor(
    private biomService: BiomService,
    private keyService: KeyboardEventService,
    private layout: LayoutService) {
    this.keyService.keydown$.subscribe((e: KeyboardEvent) => {
      if (e.key === 'w' || e.key === 'ArrowUp') { this.move('nord') };
      if (e.key === 'a' || e.key === 'ArrowLeft') { this.move('west') };
      if (e.key === 's' || e.key === 'ArrowDown') { this.move('sud') };
      if (e.key === 'd' || e.key === 'ArrowRight') { this.move('ost') };
    });
  }

  ngOnInit(): void {
    // this.loadMap('trymap');
    this.loadMap('trymap').then(() => {
      this.setStartPosition(4, 5);
      this.executeAction(0);
    });
  }

  async loadMap(map: string) {
    const loadedMap = await this.biomService.loadMap(map);
    if (loadedMap) {
      // Die Map wurde um 90° gedreht, also muss sie zurück gedreht werden
      const rotMap = this.biomService.rotateMap90Degrees(loadedMap)
      this.biomService.generateMap(rotMap);
      this.map = this.biomService.tryMap;
      this.maxWidth = this.map.length;
      this.maxHeight = this.map[0].length;
      this.currentTile.emit(this.getMyPositionTile());
    }
  }

  setStartPosition(right: number, down: number) {
    // Berechne den neuen Startpunkt in Pixeln
    const newLeft = this.left - (this.size * right);
    const newTop = this.top - (this.size * down);

    this.currentCoordinate2.next([down, right])

    // Überprüfe, ob die neue Position innerhalb der Grenzen der Karte liegt
    if (this.isPositionAllowed(newTop, newLeft)) {
      this.left = newLeft;
      this.top = newTop;
      this.currentTile.emit(this.getMyPositionTile()); // Aktualisiere die aktuelle Kachel
    } else {
      console.log('Die gewünschte Startposition ist außerhalb der Karte.');
    }
  }


  // -------------------------------------------------------------------------------

  createPlayerStyle() {
    return this.layout.getPlayerStyle(this.size);
  }

  createHeaderStyle() {
    return this.layout.getStyleColors(this.getMyPositionTile(), false);
  }

  createMapStyle() {
    return {
      'grid-template-columns': 'repeat(' + this.map.length + ',' + this.size + 'px)',
      'grid-template-rows': 'repeat(' + this.map[0].length + ',' + this.size + 'px)',
    }
  }

  createTileStyle(biom: Biom) {
    const styleColors = this.layout.getStyleColors(biom);

    const style = {
      'width': this.size + 'px',
      'height': this.size + 'px',
      'top': this.top + 'px',
      'left': this.left + 'px',
      ...styleColors,
    }
    return style;
  }


  iconUrl(name: string) {
    return this.layout.getImgUrlMap(name);
  }

  iconError(icon: EventTarget | null) {
    if (icon instanceof HTMLImageElement) {
      icon.style.display = 'none';
    }
  }

  // -------------------------------------------------------------------------------

  move(direction: 'nord' | 'west' | 'ost' | 'sud') {
    const currentTile = this.getMyPositionTile();
    let futureTop = this.top;
    let futureLeft = this.left;

    if (direction === 'west') {
      futureLeft += this.size;
    } else if (direction === 'nord') {
      futureTop += this.size;
    } else if (direction === 'ost') {
      futureLeft -= this.size;
    } else if (direction === 'sud') {
      futureTop -= this.size;
    }

    if (this.isPositionAllowed(futureTop, futureLeft)) {
      const newPosition = this.findMyPosition(futureTop, futureLeft);
      const newTile = this.map[newPosition[0]][newPosition[1]];

      const allowedWays: { [key: string]: 'nord' | 'west' | 'ost' | 'sud' } = {
        west: 'ost',
        nord: 'sud',
        ost: 'west',
        sud: 'nord',
      };

      if (this.isWayAllowed(direction, newTile) && this.isWayAllowed(allowedWays[direction], currentTile)) {
        this.top = futureTop;
        this.left = futureLeft;
        this.currentTile.emit(this.getMyPositionTile());
        this.currentCoordinate2.next([newPosition[0], newPosition[1]]);
      } else {
        this.hopUp();
      }
    } else {
      this.hopUp();
    }
    this.executeAction(0);
  }


  // -------------------------------------------------------------------------------

  findMyPosition(top = this.top, left = this.left) {
    // Um den Index[?][?] zu finden werden zur besseren lesbarkeit Hilfsvariabeln erstellt
    // Hilfsvariabel um den Pixelwert der mittleren Kachel zu finden 
    const tileWidthPosition: number = this.size * this.tileMiddelWidth - this.size;
    const tileHeigthPosition: number = this.size * this.tileMiddelHeigth - this.size;

    // Nun wird die Position im Bezug zur ganzen Karte ermittelt
    const relativeLeft: number = left - tileWidthPosition;
    const relativeTop: number = top - tileHeigthPosition;

    // Mit Math.abs nehme ich nur den positiven Wert
    // Teile das durch this.size und ich habe die Kachel
    let indexMiddleWidth: number = Math.abs(relativeLeft) / this.size;
    let indexMiddleHeigth: number = Math.abs(relativeTop) / this.size;

    return [indexMiddleWidth, indexMiddleHeigth, relativeLeft, relativeTop];
  }

  getMyPositionTile(): Biom {
    const index = this.findMyPosition();
    if (!this.map || index[0] >= this.map.length || index[0] < 0 ||
      index[1] >= this.map[index[0]].length || index[1] < 0) {
      return EmptyBiom;
    }
    return this.map[index[0]][index[1]];
  }

  isPositionAllowed(futureTop: number, futureLeft: number) {
    // futureIndex = [indexWidth, indexHeigth, relativeLeft, relativeTop]
    const futureIndex = this.findMyPosition(futureTop, futureLeft);

    // furtureIndex hat keine negativen Werte, sie werden in positive umgewandelt
    // Also ist -1 = 1 und ich muss zusätzlich mit dem relativen Wert vergleichen
    if (futureIndex[0] === 1 && futureIndex[2] > 0 || futureIndex[0] >= this.maxWidth) {
      console.log('Horizontal außerhalb der Grenzen!');
      return false;
    }

    if (futureIndex[1] === 1 && futureIndex[3] > 0 || futureIndex[1] >= this.maxHeight) {
      console.log('Vertikal außerhalb der Grenzen!');
      return false;
    }

    return true;
  }

  isWayAllowed(way: 'west' | 'nord' | 'ost' | 'sud', biom: Biom) {
    if (way === 'west' && !biom.ost) { return false };
    if (way === 'nord' && !biom.sud) { return false };
    if (way === 'ost' && !biom.west) { return false };
    if (way === 'sud' && !biom.nord) { return false };
    return true
  }

  //-------------------------------------------------------------------

  isHoppingUp: boolean = false;
  hopUp() {
    this.isHoppingUp = true;
    setTimeout(() => {
      this.isHoppingUp = false;
    }, 300); // Dauer der Animation in Millisekunden
  }

  // --------------------------------------------------------------------


  private _header$: BehaviorSubject<string> = new BehaviorSubject<string>('Unbekannte Stimme');
  get header$() {
    return this._header$.asObservable();
  }
  private _text$: BehaviorSubject<string> = new BehaviorSubject<string>('Hallo?');
  get text$() {
    return this._text$.asObservable();
  }
  private _icon$: BehaviorSubject<string> = new BehaviorSubject<string>('nothing');
  get icon$() {
    return this._icon$.asObservable();
  }
  private _color$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([100, 100, 100]);
  get color$() {
    return this._color$.asObservable();
  }
  private _path$: BehaviorSubject<string> = new BehaviorSubject<string>('map');
  get path$() {
    return this._path$.asObservable();
  }
  private _btn$: BehaviorSubject<Array<{ button: string, actionID: number }>> = new BehaviorSubject<Array<{ button: string, actionID: number }>>([]);
  get btn$() {
    return this._btn$.asObservable();
  }

  executeAction(actionID: number) {
    console.log(actionID);


    const tile = this.getMyPositionTile()

    if (actionID === 0 && tile) {
      console.log('Hallo!');

      this._header$.next(tile.name);
      this._text$.next(tile.discription);
      this._color$.next(tile.color);
      this._icon$.next(tile.icon);
      this._path$.next('mapIcon')
      this._btn$.next([]);
    }

    const newAction = eventActions.find(action => action.id === actionID)

    if (newAction) {
      this._header$.next(newAction.header);
      this._text$.next(newAction.text);
      this._color$.next([100, 50, 60]);
      this._icon$.next(newAction.icon);
      this._path$.next(newAction.path)
      this._btn$.next(newAction.action);
    }

  }


}
