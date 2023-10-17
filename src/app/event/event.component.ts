import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Biom } from '../map/biom.service';
import { EmptyBiom } from '../map/biom';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  @Input() tile: Biom | null = EmptyBiom;

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

}
