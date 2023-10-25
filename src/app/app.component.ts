import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PlayerEditorComponent } from "./playerEditor/editor/editor.component";
import { MenuComponent } from './menu/menu.component';
import { MapComponent } from './map/map.component';
import { EventComponent } from "./event/event.component";
import { Biom, EmptyBiom } from './db/biom';
import { BehaviorSubject, Observable, Observer, of } from 'rxjs';
import { MapEditorComponent } from './map/map-editor/map-editor.component';
import { DialogComponent } from './event/action/dialog/dialog.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, FormsModule, PlayerEditorComponent, MapComponent, MenuComponent, EventComponent, MapEditorComponent, DialogComponent]
})
export class AppComponent{
  title = 'TryDB';
  private _currentTile: BehaviorSubject<Biom> = new BehaviorSubject<Biom>(EmptyBiom);
  private _currentCoordinate: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([0,0])

  showDialog: boolean = false;

  setCurrentTile(tile: Biom){
    this._currentTile.next(tile);
  }

  get currentTile(){
    return this._currentTile.asObservable();
  }

  setCurrentCoordinate(coor: number[]){
    this._currentCoordinate.next(coor);
  }

  get currentCoordinate(){
    return this._currentCoordinate.asObservable();
  }

  toggleShowDialog(){
    this.showDialog = !this.showDialog;
  }
}
