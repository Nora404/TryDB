import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Biom, EmptyBiom } from '../db/biom';
import { ActionComponent } from "./action/action.component";
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { LayoutService } from '../layout/layout.service';

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
  }

  @Output() actionID: EventEmitter<number> = new EventEmitter<number>();

  constructor(private layout: LayoutService) { }

  isEvent() {
    // Es ist besser, zuerst zu prüfen, ob this._tile definiert ist, bevor wir darauf zugreifen.
    if (this._tile && Array.isArray(this._tile.events) && this._tile.events.length > 0) {
      // Überprüfe, ob das erste Element von events ein Array ist und Elemente enthält.
      return Array.isArray(this._tile.events[0]) && this._tile.events[0].length > 0;
    }
    return false;
  }

  getStyleColors() {
    return this.layout.getGrayColors();
  }

  executeAction(actionID: number) {
    this.actionID.emit(actionID);
  }
}
