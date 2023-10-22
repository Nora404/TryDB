import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss']
})
export class MapEditorComponent {
  mapArray: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]; // Beispielwert, du kannst die Größe und die Initialwerte anpassen

  biomes = [
    { id: 0, color: 'white', name: 'Leer', symbol: 'nothing' },
    { id: 1, color: '#87a787', name: 'Gras', symbol: 'grass' },
    // Füge hier weitere Biome hinzu, wenn du möchtest
  ];
  selectedBiome: any = null;


  expandUp() {
    this.mapArray.unshift(new Array(this.mapArray[0].length).fill(0));
  }
  
  expandDown() {
    this.mapArray.push(new Array(this.mapArray[0].length).fill(0));
  }
  
  expandLeft() {
    this.mapArray.forEach(row => row.unshift(0));
  }
  
  expandRight() {
    this.mapArray.forEach(row => row.push(0));
  }

  getTileColor(tileValue: number): string {
    const biome = this.biomes.find(b => b.id === tileValue);
    return biome ? biome.color : 'transparent';
  }

  getTileSymbol(tileValue: number): string {
    const biome = this.biomes.find(b => b.id === tileValue);
    return biome ? biome.symbol : 'empty';
}


  setTile(row: number, col: number) {
    if (this.selectedBiome) {
      this.mapArray[row][col] = this.selectedBiome.id;
    }
  }
 

  selectBiome(biome: any) {
    this.selectedBiome = biome;
  }

  saveArray() {
    // TODO: Logik zum Speichern des Arrays (kann später hinzugefügt werden)
    console.log('Save array', this.mapArray);
  }

  clearArray() {
    this.mapArray = this.mapArray.map(row => row.map(() => 0)); // Setzt alle Werte im Array auf 0
  }
}
