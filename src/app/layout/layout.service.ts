import { Injectable } from '@angular/core';
import { Biom } from '../db/biom';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _imgUrl: string = '../assets/';
  private _imgNothing: string = '../assets/mapIcons/nothing.svg';

  getStyleColors(biom: Biom, borderCheck: boolean = true){
    const color = biom.color;
    const red: number = (color[0] || 100); 
    const green: number = (color[1] || 100); 
    const blue: number = (color[2] || 100); 
    const big = `4px solid rgb(${red * 0.5},${green * 0.5},${blue * 0.5})`;
    const small = `2px dotted rgb(${red * 0.5},${green * 0.5},${blue * 0.5})`;

    const style = {
      'color':            `rgb(${red * 0.3},${green * 0.3},${blue * 0.3})`,
      'background-color': `rgb(${red},${green},${blue})`,
      'border-top': biom.nord && borderCheck ? small : big,
      'border-right': biom.ost && borderCheck ? small : big,
      'border-bottom': biom.sud && borderCheck ? small : big,
      'border-left': biom.west && borderCheck ? small : big,
    }
    return style
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

  getImgUrlMap(name: string | undefined){
    return name ? this._imgUrl + '/mapIcons/' + name + '.svg' : this._imgNothing; 
  }
  getImgUrlCreature(name: string | undefined){
    return name ? this._imgUrl + '/kreatur/' + name + '.svg' : this._imgNothing; 
  }
  getImgUrlPlayer(name: string | undefined){
    return name ? this._imgUrl + '/player/' + name + '.svg' : this._imgNothing; 
  }
  getImgUrlUiIcons(name: string | undefined){
    return name ? this._imgUrl + '/uiIcons/' + name + '.svg' : this._imgNothing; 
  }

  getPlayerStyle(size: number){
    const style = {
      'width': size * 0.9 +'px',
      'height': size * 0.9 +'px',
    }
    return style
  }
}
