import { Injectable } from '@angular/core';
import { biom } from '../db/biom';


export type Biom = {
  name: string,
  icon: string,
  color: number[],
  discription: string,
  events: [];
  goWest: boolean;
  goNord: boolean;
  goOst: boolean;
  goSud: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BiomService {

  getRandomColor(base: number){
    return base + Math.floor(Math.random() * 21);
  }

  addRandomColorToBiom(biom: Biom): Biom{
    return {
      ...biom,
      color:[
        this.getRandomColor(biom.color[0]),
        this.getRandomColor(biom.color[1]),
        this.getRandomColor(biom.color[2])
      ]
    }
  }

  tryMap = this.generateTryMap();
  generateTryMap(){
    const baseMap = [
      [2,2,3,1,5,1,4,1],
      [2,2,2,1,3,4,1,1],
      [2,2,4,6,4,2,1,2],
      [1,4,1,1,1,1,2,1],
      [2,4,4,1,1,3,1,1],
      [2,2,1,1,3,2,2,1],
      [2,2,1,1,1,2,1,1],
      [1,2,1,1,1,1,2,2],
    ]
    return baseMap.map(row=>{
      return row.map(biomCode => this.addRandomColorToBiom(biom[biomCode]))
    })
  }
}