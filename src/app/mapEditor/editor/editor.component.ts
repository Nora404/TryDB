import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Biom, biom, tryMap } from './biom';
import { BehaviorSubject } from 'rxjs';

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
  myPosition$ = new BehaviorSubject<string>(this.findMyPosition())

  cssTile = {
    'width': this.size +'px',
    'height': this.size +'px',
    'top': this.top +'px',
    'left': this.left +'px',
  }

  cssMap = {
    'grid-template-columns': 'repeat(' + tryMap.length + ',' + this.size + 'px)',
    'grid-template-rows': 'repeat(' + tryMap[0].length + ',' + this.size + 'px)',
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
    this.myPosition$.next(this.findMyPosition());

    this.cssTile = {
      ...this.cssTile,
      'top': this.top+'px',
      'left': this.left+'px',
    };
  }

  findMyPosition(){
    const playgroundWidth = 250 / this.size;
    const playgroundHeigth = 250 / this.size;

    let middelWidth = Math.round(playgroundWidth / 2);
    let middelHeigth = Math.round(playgroundHeigth / 2);

    let playerPositionTop = Math.abs(this.top - (this.size*middelHeigth-this.size)) / this.size;
    let playerPositionLeft = Math.abs(this.left - (this.size*middelWidth-this.size)) / this.size;

    return tryMap[playerPositionLeft][playerPositionTop].name;
  }


  test(){
    console.log(biom[1]);
  }
}
