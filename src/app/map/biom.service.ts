import { Injectable } from '@angular/core';
import { Biom, EmptyBiom, biom } from '../db/biom';


@Injectable({
  providedIn: 'root',
})
export class BiomService {

  tryMap: Biom[][] = [[EmptyBiom]];

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

  async loadMap(map: string = 'trymap'): Promise<number[][]> {
    try {
      const response = await fetch(`../../assets/maps/${map}.json`);
      const loadedMap: number[][] = await response.json();
      return loadedMap;
    } catch (error) {
      console.error(`Fehler beim Laden der Map: ${error}`);
      return[[0]];
    }
  }
  
  generateMap(baseMap: number[][]): void {
    this.tryMap = baseMap.map(row => 
      row.map(biomCode => this.getBiomById(biomCode))
    );
  }
  
  getBiomById(biomCode: number): Biom {
    const foundBiom = biom.find(b => b.id === biomCode);
    if (foundBiom) {
      return this.addRandomColorToBiom(foundBiom);
    }
    return EmptyBiom;
  }
}