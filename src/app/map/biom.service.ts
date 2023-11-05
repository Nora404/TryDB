import { Injectable } from '@angular/core';
import { Biom, EmptyBiom, biom } from '../db/biom';

type MapEntrie = {
  biomID: number,
  eventID: number[]
};

@Injectable({
  providedIn: 'root',
})
export class BiomService {

  tryMap: Biom[][] = [[EmptyBiom]];
  empty = { biomID: 0, eventID: [] };

  getRandomColor(base: number) {
    return base + Math.floor(Math.random() * 15);
  }

  addRandomColorToBiom(biom: Biom): Biom {
    return {
      ...biom,
      color: [
        this.getRandomColor(biom.color[0]),
        this.getRandomColor(biom.color[1]),
        this.getRandomColor(biom.color[2])
      ]
    }
  }

  async loadMap(map: string = 'trymap'): Promise<MapEntrie[][]> {
    try {
      const response = await fetch(`../../assets/maps/${map}.json`);
      const loadedMap: MapEntrie[][] = await response.json();
      return loadedMap;
    } catch (error) {
      console.error(`Fehler beim Laden der Map: ${error}`);
      return [[this.empty]];
    }
  }

  generateMap(baseMap: MapEntrie[][]): void {
    this.tryMap = baseMap.map(row =>
      row.map((entrie: MapEntrie) => this.getBiomById(entrie.biomID, entrie.eventID))
    );
  }

  getBiomById(biomID: number, eventID: number[]): Biom {
    const foundBiom = biom.find(b => b.id === biomID);
    if (foundBiom) {
      let clonedBiom = { ...foundBiom, events: foundBiom.events.map(e => [...e]) };

      eventID.forEach((id) => {
        if (id !== 0) {
          clonedBiom.events.push([id]);
        }
      });

      clonedBiom = this.addRandomColorToBiom(clonedBiom);

      return clonedBiom;
    }
    return EmptyBiom;
  }

  rotateMap90Degrees(baseMap: MapEntrie[][]): MapEntrie[][] {
    const rotatedMap: MapEntrie[][] = [];

    for (let i = 0; i < baseMap[0].length; i++) {
      const newRow: MapEntrie[] = [];
      for (let j = baseMap.length - 1; j >= 0; j--) {
        newRow.unshift(baseMap[j][i]);
      }
      rotatedMap.push(newRow);
    }

    return rotatedMap;
  }
}