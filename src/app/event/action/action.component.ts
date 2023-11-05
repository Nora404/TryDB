import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tileEvent } from 'src/app/db/events';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {
  @Input() eventID: number = 0;
  @Output() actionID: EventEmitter<number> = new EventEmitter<number>();

  getEvent() {
    return tileEvent.find(event => event.id === this.eventID);
  }
  getImage() {
    const event = this.getEvent();
    return event ? "../../../assets/uiIcons/" + event.icon + ".svg" : '';
  }

  handleAction(action: number) {
    this.actionID.emit(action);
  }
}
