import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Biom, EmptyBiom } from '../db/biom';
import { ActionComponent } from "./action/action.component";
import { DialogComponent } from './action/dialog/dialog.component';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { LayoutService } from '../layout/layout.service';
@Component({
    selector: 'app-event',
    standalone: true,
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
    imports: [CommonModule, ActionComponent, EventDialogComponent]
})
export class EventComponent{

  @Input() tile: Biom | null = EmptyBiom;
  @Input() coordinate: number[] = [0,0];

  @Output() actionID: EventEmitter<string> = new EventEmitter<string>();

  constructor(private layout: LayoutService){}

  isEvent(){
    if(this.tile){     
      return this.tile.events[0].length > 0 ? true : false;
    }
    return false
  }

  getStyleColors(){
    return this.layout.getStyleColors(this.tile!, false);
  }

  executeAction(actionID: string){
    this.actionID.emit(actionID);
  }

}
