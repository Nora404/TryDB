import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Biom, EmptyBiom } from 'src/app/db/biom';

@Component({
  selector: 'app-event-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent {
  @Input() tile: Biom | null = EmptyBiom;
  private _imgUrl: string = '../../../../assets/mapIcons/';


  getImgUrl(name: string | undefined){
    if(!name){
      return this._imgUrl + 'nothing.svg';
    }
    return this._imgUrl + name + '.svg';
  }

  getRadialColors(color: number[] | undefined){
    if(color){
      return {
        'background': `radial-gradient(circle, 
            rgba(${color[0]}, ${color[1]}, ${color[2]}, 1) 0%, 
            rgba(${color[0] * 0.8}, ${color[1] * 0.8}, ${color[2] * 0.8}, 1) 100%)`,
        'border' : `5px solid rgb(${color[0] * 0.4}, ${color[1] * 0.4}, ${color[2] * 0.4})`,   
        'height' : '100%',
      }
    }
    return
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
}
