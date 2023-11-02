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
    if (this._tile) {
      return this._tile.events[0].length > 0 ? true : false;
    }
    return false
  }

  getStyleColors() {
    return this.layout.getGrayColors();
  }

  executeAction(actionID: number) {
    this.actionID.emit(actionID);
  }
}
