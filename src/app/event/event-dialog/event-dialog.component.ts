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
  @Input() path: string = "map";

  constructor(private layout: LayoutService){}


  getImgUrl(){
    switch(this.path){
      case 'uiIcon':
        return this.layout.getImgUrlUiIcons(this.icon);
      case 'kreatur':
        return this.layout.getImgUrlCreature(this.icon);
      default:
        return this.layout.getImgUrlMap(this.icon);  
    }
    
  }

  getImgUrlUiIcon(event:any){
    event.target.scr = this.layout.getImgUrlUiIcons(this.icon);
  }

  getRadialColors(){
    return this.layout.getRadialColors(this.color);
  }

}
