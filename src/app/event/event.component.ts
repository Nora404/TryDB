import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Biom, EmptyBiom } from '../db/biom';
import { ActionComponent } from "./action/action.component";
import { DialogComponent } from './action/dialog/dialog.component';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
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

  isEvent(){
    if(this.tile){     
      return this.tile.events[0].length > 0 ? true : false;
    }
    return false
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

  executeAction(actionID: string){
    this.actionID.emit(actionID);
  }

}
