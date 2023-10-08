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

  top: number = 0;
  left: number = 0;
  size: number = 50;
  myPosition$ = new BehaviorSubject<string>(this.findMyPosition())

  cssClass = {
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

    this.cssClass = {
      ...this.cssClass,
      'top': this.top+'px',
      'left': this.left+'px',
    };

    // console.log((this.top - 100) +' / '+(this.left - 100))
    // console.log(tryMap.length +' / '+ tryMap[0].length)
    console.log(this.findMyPosition())
  }

  findMyPosition(){
    const playgroundWidth = 250 / this.size;
    const playgroundHeigth = 250 / this.size;

    let middelWidth = Math.round(playgroundWidth / 2);
    let middelHeigth = Math.round(playgroundHeigth / 2);

    let playerPositionTop = Math.abs(this.top - (this.size*middelHeigth-this.size)) / this.size;
    let playerPositionLeft = Math.abs(this.left - (this.size*middelWidth-this.size)) / this.size;

    console.log(playerPositionTop + ' / ' + playerPositionLeft);
    
    return tryMap[playerPositionLeft][playerPositionTop].name;
  }


  test(){
    console.log(biom[1]);
  }
}
