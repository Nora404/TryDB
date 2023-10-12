import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Biom, biom, tryMap } from './biom';
import { BehaviorSubject, retry } from 'rxjs';

@Component({
  selector: 'app-mapEditor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class MapEditorComponent{

  // Das ist die Karte, ein Mehrdimensionales Array
  // [[1,2,3][1,2,3]] Diese Karte ist 2x3 Kacheln groß
  map = tryMap;

  // Die Position der Karte, in Pixeln
  // Es bestimmt den Startpunkt
  top: number = 0;
  left: number = 0;

  // Die Größe der Kacheln, in Pixeln
  size: number = 50;

  // Die Größe des sichtbaren Spielfeldes
  // der Multiplikator (ungerade) sind die gewünschten Kacheln
  playgroundWidth: number = this.size * 7;
  playgroundHeight: number = this.size * 5;

  // Die Anzahl der Kacheln auf der gesamten Karte 
  maxWidth: number = this.map.length;
  maxHeight: number = this.map[0].length;

  // Die Anzahl der Kacheln auf dem sichtbaren Spielfeld
  tileWidth: number = this.playgroundWidth / this.size;
  tileHeight: number = this.playgroundHeight / this.size;

  // Die Kacheln (z.B. 4/5) genau in der Mitte des sichtbaren Spielfeldes
  tileMiddelWidth: number = Math.round(this.tileWidth / 2);
  tileMiddelHeigth: number = Math.round(this.tileHeight / 2);

  imgUrl: string = '../../../assets/mapIcons/';

  cssMap = {
    'grid-template-columns': 'repeat(' + this.map.length + ',' + this.size + 'px)',
    'grid-template-rows': 'repeat(' + this.map[0].length + ',' + this.size + 'px)',
  }

  // -------------------------------------------------------------------------------

  createPlayerStyle(){
    const color = this.getMyPositionTile().color;
    const styleColors = this.getStyleColors(color);

    const style = {
      'width': this.size * 0.8 +'px',
      'height': this.size * 0.8 +'px',
      ... styleColors,
    }
    return style
  }

  createTileStyle(color: number[]){
    const styleColors = this.getStyleColors(color);

    const style = {
      'width': this.size +'px',
      'height': this.size +'px',
      'top': this.top +'px',
      'left': this.left +'px',
      ... styleColors,
    }
    return style;
  }

  getStyleColors(color: number[]){
    const red: number = (color[0] || 100); 
    const green: number = (color[1] || 100); 
    const blue: number = (color[2] || 100); 

    const style = {
      'color':            `rgb(${red * 0.2},${green * 0.2},${blue * 0.2})`,
      'border-color':     `rgb(${red * 0.5},${green * 0.5},${blue * 0.5})`,
      'background-color': `rgb(${red},${green},${blue})`,
    }
    return style
  }

  iconUrl(name:string){
    return this.imgUrl + name + '.svg'
  }

  iconError(icon: EventTarget | null){
    if(icon instanceof HTMLImageElement){
      icon.style.display = 'none';
    }  
  }

  // -------------------------------------------------------------------------------

  west(){
    const futureLeft =  this.left + this.size;
    if(this.isPositionAllowed(this.top, futureLeft)){
      this.left = this.left + this.size;
    }
  }
  nord(){
    const futureTop = this.top + this.size;
    if(this.isPositionAllowed(futureTop, this.left)){
      this.top = futureTop;
    }
  }
  ost(){
    const futureLeft = this.left - this.size; 
    if(this.isPositionAllowed(this.top, futureLeft)){
      this.left = futureLeft;
    }
  }
  sud(){
    const futureTop = this.top - this.size;
    if(this.isPositionAllowed(futureTop, this.left)){

      this.top = futureTop;
    }
  }

  // -------------------------------------------------------------------------------

  findMyPosition(top = this.top, left = this.left){
    // Um den Index[?][?] zu finden werden zur besseren lesbarkeit Hilfsvariabeln erstellt
    // Hilfsvariabel um den Pixelwert der mittleren Kachel zu finden 
    const tileWidthPosition: number = this.size* this.tileMiddelWidth -this.size;
    const tileHeigthPosition: number = this.size* this.tileMiddelHeigth -this.size;

    // Nun wird die Position im Bezug zur ganzen Karte ermittelt
    const relativeLeft: number = left - tileWidthPosition;
    const relativeTop: number = top - tileHeigthPosition;

    // Mit Math.abs nehme ich nur den positiven Wert
    // Teile das durch this.size und ich habe die Kachel
    let indexMiddleWidth: number = Math.abs(relativeLeft) / this.size;
    let indexMiddleHeigth: number = Math.abs(relativeTop) / this.size;

    return [indexMiddleWidth, indexMiddleHeigth, relativeLeft, relativeTop];
  }

  getMyPositionTile(){
    const index = this.findMyPosition();
    return this.map[index[0]][index[1]]
  }

  isPositionAllowed(futureTop: number, futureLeft: number){
    // futureIndex = [indexWidth, indexHeigth, relativeLeft, relativeTop]
    const futureIndex = this.findMyPosition(futureTop, futureLeft);

    // furtureIndex hat keine negativen Werte, sie werden in positive umgewandelt
    // Also ist -1 = 1 und ich muss zusätzlich mit dem relativen Wert vergleichen
    if(futureIndex[0] === 1 && futureIndex[2] > 0 || futureIndex[0] >= this.maxWidth) {
      console.log('Horizontal außerhalb der Grenzen!');
      return false;
    }
  
    if(futureIndex[1] === 1 && futureIndex[3] > 0 || futureIndex[1] >= this.maxHeight) {
      console.log('Vertikal außerhalb der Grenzen!');
      return false;
    }

    return true;
  }
}
