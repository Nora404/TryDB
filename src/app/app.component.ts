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

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, FormsModule, PlayerEditorComponent, MapComponent, MenuComponent, EventComponent, MapEditorComponent]
})
export class AppComponent {
  title = 'TryDB';
  private _currentTile: BehaviorSubject<Biom> = new BehaviorSubject<Biom>(EmptyBiom);
  private _actionID: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  showDialog: boolean = false;

  setCurrentTile(tile: Biom) {
    this._currentTile.next(tile);
  }

  get currentTile() {
    return this._currentTile.asObservable();
  }

  setActionID(id: number) {
    this._actionID.next(id);
  }

  get actionID() {
    return this._actionID.asObservable();
  }
}
