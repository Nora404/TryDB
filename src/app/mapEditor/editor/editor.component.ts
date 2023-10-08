import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { biom, tryMap } from './biom';

@Component({
  selector: 'app-mapEditor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class MapEditorComponent{

  map = tryMap;

  top: number = -50;
  left: number = -50;
  size: number = 50;

  cssClass = {
    'width': this.size +'px',
    'height': this.size +'px',
    'top': this.top +'px',
    'left': this.left +'px',
  }

  kachelLayout(value: string){
    return 'kachel ' + value;
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
    };

    this.test();
  }

  test(){
    console.log(biom[1]);
  }
}
