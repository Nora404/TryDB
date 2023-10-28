import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Biom, EmptyBiom } from '../db/biom';
import { ActionComponent } from "./action/action.component";
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { LayoutService } from '../layout/layout.service';
import { BehaviorSubject, of } from 'rxjs';

@Component({
    selector: 'app-event',
    standalone: true,
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
    imports: [CommonModule, ActionComponent, EventDialogComponent]
})
export class EventComponent{

  public _tile: Biom = EmptyBiom;
  @Input() 
  set tile(tile:Biom | null){
    this._tile = tile ? tile : EmptyBiom;
    this._header$.next(tile?.name || 'Unbekannte Stimme');
    this._text$.next(tile?.discription || 'Hallo?');
    this._icon$.next(tile?.icon || 'nothing');
    this._color$.next(tile?.color || [100, 100, 100]);
  }
  
  // tile: Biom | null = EmptyBiom;

  @Input() coordinate: number[] = [0,0];
  @Output() actionID: EventEmitter<string> = new EventEmitter<string>();

  private _header$: BehaviorSubject<string> = new BehaviorSubject<string>('Unbekannte Stimme');
  get header$(){
    return this._header$.asObservable();
  }
  private _text$: BehaviorSubject<string> = new BehaviorSubject<string>('Hallo?');
  get text$(){
    return this._text$.asObservable();
  }
  private _icon$: BehaviorSubject<string> = new BehaviorSubject<string>('nothing');
  get icon$(){
    return this._icon$.asObservable();
  }
  private _color$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([100,100,100]);
  get color$(){
    return this._color$.asObservable();
  }

  constructor(private layout: LayoutService){}

  isEvent(){
    if(this._tile){     
      return this._tile.events[0].length > 0 ? true : false;
    }
    return false
  }

  getStyleColors(){
    return this.layout.getStyleColors(this._tile!, false);
  }

  executeAction(actionID: string){
    this.actionID.emit(actionID);
    
    this._header$.next(actionID);
  }
}
