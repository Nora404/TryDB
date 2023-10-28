import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Biom, EmptyBiom } from 'src/app/db/biom';
import { LayoutService } from 'src/app/layout/layout.service';

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
  @Input() icon: string = 'nothing';
  @Input() color: number[] = [];

  constructor(private layout: LayoutService){}


  getImgUrl(){
    return this.layout.getImgUrlMap(this.icon) || this.layout.getImgUrlUiIcons(this.icon);
  }

  getRadialColors(){
    return this.layout.getRadialColors(this.color);
  }

}
