import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiomService } from './biom.service';
import { KeyboardEventService } from 'src/app/keyboard-event.service';
import { Biom, EmptyBiom } from '../db/biom';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  @Output() currentTile: EventEmitter<Biom> = new EventEmitter<Biom>()

  // Das ist die Karte, ein Mehrdimensionales Array
  // [[1,2,3][1,2,3]] Diese Karte ist 2x3 Kacheln groß
  map: Biom[][] = [[]];

  // Die Position der Karte, in Pixeln
  // Es bestimmt den Startpunkt
  top: number = 0;
  left: number = 0;

  // Die Größe der Kacheln, in Pixeln
  size: number = 50*1.5;

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

  constructor(private biomService: BiomService, private keyService: KeyboardEventService){
    this.keyService.keydown$.subscribe((e:KeyboardEvent)=>{
      if(e.key === 'w' || e.key === 'ArrowUp'){this.nord()};
      if(e.key === 'a' || e.key === 'ArrowLeft'){this.west()};
      if(e.key === 's' || e.key === 'ArrowDown'){this.sud()};
      if(e.key === 'd' || e.key === 'ArrowRight'){this.ost()};
    });
  }

  ngOnInit(): void {
    // this.loadMap('trymap');
    this.loadMap('trymap').then(() => {
      this.setStartPosition(4, 4);
    });
  }

  async loadMap(map:string) {
    const loadedMap = await this.biomService.loadMap(map);
    if (loadedMap){
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

  createPlayerStyle(){
    const color = this.getMyPositionTile().color;
    const styleColors = this.getStyleColors(color);

    const style = {
      'width': this.size * 0.8 +'px',
      'height': this.size * 0.8 +'px',
      ... styleColors,
    }
    return style
  }

  createTileStyle(color: number[]){
    const styleColors = this.getStyleColors(color);

    const style = {
      'width': this.size +'px',
      'height': this.size +'px',
      'top': this.top +'px',
      'left': this.left +'px',
      ... styleColors,
    }
    return style;
  }

  getStyleColors(color: number[]){
    const red: number = (color[0] || 100); 
    const green: number = (color[1] || 100); 
    const blue: number = (color[2] || 100); 

    const style = {
      'color':            `rgb(${red * 0.3},${green * 0.3},${blue * 0.3})`,
      'border-color':     `rgb(${red * 0.5},${green * 0.5},${blue * 0.5})`,
      'background-color': `rgb(${red},${green},${blue})`,
    }
    return style
  }

  getMapStyle() {
    return{
      'grid-template-columns': 'repeat(' + this.map.length + ',' + this.size + 'px)',
      'grid-template-rows': 'repeat(' + this.map[0].length + ',' + this.size + 'px)',
    }
  }

  iconUrl(name:string){
    return this.imgUrl + name + '.svg'
  }

  iconError(icon: EventTarget | null){
    if(icon instanceof HTMLImageElement){
      icon.style.display = 'none';
    }  
  }

  // -------------------------------------------------------------------------------

  west(){
    const futureLeft =  this.left + this.size;
    if(this.isPositionAllowed(this.top, futureLeft)){

      const newPosition = this.findMyPosition(this.top, futureLeft);
      const newTile = this.map[newPosition[0]][newPosition[1]];

      if(this.isWayAllowed('west', newTile)){
        this.left = this.left + this.size;
        this.currentTile.emit(this.getMyPositionTile());
      }
    }
  }
  nord(){
    const futureTop = this.top + this.size;
    const currentTile = this.getMyPositionTile();

    if(this.isPositionAllowed(futureTop, this.left) && this.isWayAllowed('nord', currentTile)){

      const newPosition = this.findMyPosition(futureTop, this.left);
      const newTile = this.map[newPosition[0]][newPosition[1]];

      if(this.isWayAllowed('nord', newTile)){
        this.top = futureTop;
        this.currentTile.emit(this.getMyPositionTile());
      }
    }
  }
  ost(){
    const futureLeft = this.left - this.size; 
    if(this.isPositionAllowed(this.top, futureLeft)){

      const newPosition = this.findMyPosition(this.top, futureLeft);
      const newTile = this.map[newPosition[0]][newPosition[1]];

      if(this.isWayAllowed('ost', newTile)){
        this.left = futureLeft;
        this.currentTile.emit(this.getMyPositionTile());
      }
    }
  }
  sud(){
    const futureTop = this.top - this.size;
    if(this.isPositionAllowed(futureTop, this.left)){

      const newPosition = this.findMyPosition(futureTop, this.left);
      const newTile = this.map[newPosition[0]][newPosition[1]];

      if(this.isWayAllowed('sud', newTile)){
        this.top = futureTop;
        this.currentTile.emit(this.getMyPositionTile());
      }
    }
  }

  // -------------------------------------------------------------------------------

  findMyPosition(top = this.top, left = this.left){
    // Um den Index[?][?] zu finden werden zur besseren lesbarkeit Hilfsvariabeln erstellt
    // Hilfsvariabel um den Pixelwert der mittleren Kachel zu finden 
    const tileWidthPosition: number = this.size* this.tileMiddelWidth -this.size;
    const tileHeigthPosition: number = this.size* this.tileMiddelHeigth -this.size;

    // Nun wird die Position im Bezug zur ganzen Karte ermittelt
    const relativeLeft: number = left - tileWidthPosition;
    const relativeTop: number = top - tileHeigthPosition;

    // Mit Math.abs nehme ich nur den positiven Wert
    // Teile das durch this.size und ich habe die Kachel
    let indexMiddleWidth: number = Math.abs(relativeLeft) / this.size;
    let indexMiddleHeigth: number = Math.abs(relativeTop) / this.size;

    return [indexMiddleWidth, indexMiddleHeigth, relativeLeft, relativeTop];
  }

  getMyPositionTile(): Biom{
    const index = this.findMyPosition();
    if (!this.map || index[0] >= this.map.length || index[0] < 0 || 
        index[1] >= this.map[index[0]].length || index[1] < 0) {
      return EmptyBiom;
    }
    return this.map[index[0]][index[1]];
  }

  isPositionAllowed(futureTop: number, futureLeft: number){
    // futureIndex = [indexWidth, indexHeigth, relativeLeft, relativeTop]
    const futureIndex = this.findMyPosition(futureTop, futureLeft);

    // furtureIndex hat keine negativen Werte, sie werden in positive umgewandelt
    // Also ist -1 = 1 und ich muss zusätzlich mit dem relativen Wert vergleichen
    if(futureIndex[0] === 1 && futureIndex[2] > 0 || futureIndex[0] >= this.maxWidth) {
      console.log('Horizontal außerhalb der Grenzen!');
      return false;
    }
  
    if(futureIndex[1] === 1 && futureIndex[3] > 0 || futureIndex[1] >= this.maxHeight) {
      console.log('Vertikal außerhalb der Grenzen!');
      return false;
    }

    return true;
  }

  isWayAllowed(way: 'west'|'nord'|'ost'|'sud', biom: Biom){
    if(way==='west' && !biom.goWest){return false};
    if(way==='nord' && !biom.goNord){return false};
    if(way==='ost' && !biom.goOst){return false};
    if(way==='sud' && !biom.goSud){return false};
    return true
  }

  colorBlackSvg(rgb: number[]){
    const red = rgb[0]*0.4;
    const green = rgb[1]*0.4;
    const blue = rgb[2]*0.4;

    let hue = this.rgbToHueRotate([red, green, blue])

    return{
      'filter:': 'hue-rotate(' + Math.floor(hue) + 'deg)',
      'width': '80%',
      'height': '80%',
    }
  }

  // mit hue-rotate(xy) lässt sich ein Bild färben
  // xy hat einen wer von 0-360
  // Hier wird der wert anhand von rgb umgerechnet
  rgbToHueRotate(rgb: number[]){
    const red = rgb[0]/255;
    const green = rgb[1]/255;
    const blue = rgb[2]/255;

    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const lightness = (max + min)/2;
    const differenz = max - min;
    let hue = 0

    if(max !== min){
      if(max === red){
        hue = 60* (((green - blue)/differenz)%6);
      }
      if(max === green){
        hue = 60* (((blue - red)/differenz)+2);
      }
      if(max === blue){
        hue = 60* (((red - green)/differenz)+4);
      }
    }
    return hue
  }
}
