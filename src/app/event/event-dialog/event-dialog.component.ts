import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Biom, EmptyBiom } from 'src/app/db/biom';
import { LayoutService } from 'src/app/layout/layout.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-event-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent {

  @Input() header: string = 'Unbekannte Stimme';
  @Input() text: string = "Hallo?";
  @Input() icon: string = 'love';
  @Input() color: number[] = [100, 90, 80];
  @Input() path: string = "map";
  @Input() btn: Array<{ button: string, actionID: number }> = [];

  @Output() actionID: EventEmitter<number> = new EventEmitter<number>();

  constructor(private layout: LayoutService) { }


  getImgUrl() {
    switch (this.path) {
      case 'uiIcon':
        return this.layout.getImgUrlUiIcons(this.icon);
      case 'kreatur':
        return this.layout.getImgUrlCreature(this.icon);
      default:
        return this.layout.getImgUrlMap(this.icon);
    }

  }

  getImgUrlUiIcon(event: any) {
    event.target.scr = this.layout.getImgUrlUiIcons(this.icon);
  }

  getRadialColors() {
    return this.layout.getRadialColors(this.color);
  }

  handleButtonEvent(actionID: number) {
    this.actionID.next(actionID);
  }

  test() {
    console.log(this.header);
  }

}
