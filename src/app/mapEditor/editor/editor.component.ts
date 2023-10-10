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
  playgroundWidth: number = 350;
  playgroundHeight: number = 250;

  // TODO Funktioniert noch nicht
  minTop: number = 0;
  minLeft: number = 0;
  maxTop: number = this.playgroundHeight - this.size;
  maxLeft: number = this.playgroundWidth - this.size;

  imgUrl: string = '../../../assets/mapIcons/';

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

  cssPlayer = {
    'width': this.size * 0.8 +'px',
    'height': this.size * 0.8 +'px',
  }

  iconUrl(name:string){
    return this.imgUrl + name + '.svg'
  }

  iconError(icon: EventTarget | null){
    if(icon instanceof HTMLImageElement){
      icon.style.display = 'none';
    }  
  }

  kachelLayout(value: string){
    return 'kachel ' + value;
  }

  west(){
    this.left = this.left + this.size;
    this.update();
  }
  nord(){
    this.top = this.top + this.size;
    this.update();
  }
  ost(){
    this.left = this.left - this.size;
    this.update();
  }
  sud(){
    this.top = this.top - this.size;
    this.update();
  }

  update(){
    this.cssTile = {
      ...this.cssTile,
      'top': this.top+'px',
      'left': this.left+'px',
    };
  }

  findMyPosition(){
    const kachelnWidth = this.playgroundWidth / this.size;
    const kachelnHeigth = this.playgroundHeight / this.size;

    let middelWidth = Math.round(kachelnWidth / 2);
    let middelHeigth = Math.round(kachelnHeigth / 2);

    let playerPositionTop = Math.abs(this.top - (this.size*middelHeigth-this.size)) / this.size;
    let playerPositionLeft = Math.abs(this.left - (this.size*middelWidth-this.size)) / this.size;

    return tryMap[playerPositionLeft][playerPositionTop];
  }
}
