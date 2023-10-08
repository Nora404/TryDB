import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mapEditor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class MapEditorComponent{

  // 1 = Wiese
  // 2 = Baum
  // 3 = Blume
  // 4 = Wasser
  // 5 = Stern

  map = [[2,2,3,1,5,1,4],
         [2,2,2,1,3,4,1],
         [2,2,1,4,4,2,1],
         [2,1,1,4,3,1,1],
         [1,1,1,4,4,4,2],
         [2,1,1,1,4,4,1],
         [2,2,1,1,1,4,3]];

  top: number = -50;
  left: number = -50;
  size: number = 50;

  cssClass = {
    'width': this.size +'px',
    'height': this.size +'px',
    'top': this.top +'px',
    'left': this.left +'px',
  }

  getBackground(value:number){
    let className = 'kachelGreen';

    switch(value){
      case 1: {
        className = 'kachelGreen';
        break;
      }
      case 2: {
        className = 'kachelTree';
        break;
      }
      case 3: {
        className = 'kachelFlower';
        break;
      }
      case 4: {
        className = 'kachelWater';
        break;
      }
      case 5: {
        className = 'kachelStar';
        break;
      }
    }

    return 'kachel ' + className;
  }

  west(){
    this.left = this.left + 50;
    this.update();
  }
  nord(){
    this.top = this.top + 50;
    this.update();
  }
  ost(){
    this.left = this.left - 50;
    this.update();
  }
  sud(){
    this.top = this.top - 50;
    this.update();
  }

  update(){
    this.cssClass = {
      ...this.cssClass,
      'top': this.top+'px',
      'left': this.left+'px',
    }
  }
}
