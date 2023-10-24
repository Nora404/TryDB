import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyTileEvent, TileEvent, tileEvent } from 'src/app/db/events';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {
  @Input() eventID: number = 0;

  getEvent(){
    return tileEvent[this.eventID];
  }
}
