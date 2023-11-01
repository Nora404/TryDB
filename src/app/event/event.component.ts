import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Biom, EmptyBiom } from '../db/biom';
import { ActionComponent } from "./action/action.component";
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { LayoutService } from '../layout/layout.service';
import { BehaviorSubject, of } from 'rxjs';
import { tileEvent } from '../db/events';
import { eventActions } from '../db/actions';

@Component({
  selector: 'app-event',
  standalone: true,
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  imports: [CommonModule, ActionComponent, EventDialogComponent]
})
export class EventComponent {

  public _tile: Biom = EmptyBiom;
  @Input()
  set tile(tile: Biom | null) {
    this._tile = tile ? tile : EmptyBiom;
    this._header$.next(tile?.name || 'Unbekannte Stimme');
    this._text$.next(tile?.discription || 'Hallo?');
    this._icon$.next(tile?.icon || 'nothing');
    this._color$.next(tile?.color || [100, 100, 100]);
    this._path$.next('map');
    this._btn$.next([]);
  }

  // tile: Biom | null = EmptyBiom;

  @Input() coordinate: number[] = [0, 0];
  @Output() actionID: EventEmitter<number> = new EventEmitter<number>();

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

  constructor(private layout: LayoutService) { }

  isEvent() {
    if (this._tile) {
      return this._tile.events[0].length > 0 ? true : false;
    }
    return false
  }

  getStyleColors() {
    return this.layout.getStyleColors(this._tile!, false);
  }

  executeAction(actionID: number) {
    this.actionID.emit(actionID);

    console.log(actionID);


    // if(actionID === 0 && this._tile){
    //   console.log('Hallo!');

    //   this._header$.next(this._tile.name);
    //   this._text$.next(this._tile.discription);
    //   this._color$.next(this._tile.color);
    //   this._icon$.next(this._tile.icon);
    //   this._path$.next('mapIcon')
    //   this._btn$.next([]);
    // }

    // const newAction = eventActions.find(action => action.id === actionID)

    // if(newAction){
    //   this._header$.next(newAction.header);
    //   this._text$.next(newAction.text);
    //   this._color$.next([100,50,60]);
    //   this._icon$.next(newAction.icon);
    //   this._path$.next(newAction.path)
    //   this._btn$.next(newAction.action);
    // }

  }
}
