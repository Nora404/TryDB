import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chara',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chara.component.html',
  styleUrls: ['./chara.component.scss']
})
export class CharaComponent {


  charaName = "Name des Charakters";

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
