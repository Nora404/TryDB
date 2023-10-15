import { Injectable } from '@angular/core';


export type Biom = {
  name: string,
  icon: string,
  color: number[],
  discription: string,
}

@Injectable({
  providedIn: 'root'
})
export class BiomService {

  biom: {[key: number]:Biom} = {
    1: {
        name: 'Auf einer Wiese',
        icon: 'nothing',
        color: [135, 167, 135],
        discription: 'Weit und breit wächst nur Gras',
       },
    2: {
        name: 'Im Wald',
        icon: 'tree',
        color: [71, 124, 108],
        discription: 'Man sieht lauter Bäume',
       },
    3: {
        name: 'Eine Blumenwiese',
        icon: 'flower',
        color: [177, 125, 164],
        discription: 'Wilde Blumen sind überall gewachsen',
       },
    4: {
        name: 'Am Fluss',
        icon: 'water',
        color: [93, 125, 172],
        discription: 'Das Wasser ist klar und kalt',
       },
    5: {
        name: 'Etwas Besonderes',
        icon: 'star',
        color: [212, 186, 97],
        discription: 'Hier ist doch irgend etwas!',
       },
  }


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
      [2,2,1,4,4,2,1,2],
      [1,1,4,1,1,1,2,1],
      [2,4,4,1,1,3,1,1],
      [2,2,1,1,3,2,2,1],
      [2,2,1,1,1,2,1,1],
      [1,2,1,1,1,1,2,2],
    ]
    return baseMap.map(row=>{
      return row.map(biomCode => this.addRandomColorToBiom(this.biom[biomCode]))
    })
  }
}