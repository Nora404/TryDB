import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { biom } from 'src/app/db/biom';

@Component({
  selector: 'app-map-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss']
})
export class MapEditorComponent {
  biomes = biom;
  mapArray: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]; // Beispielwert, du kannst die Größe und die Initialwerte anpassen

  selectedBiome: any = '';

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
    const biome = biom.find(b => b.id === tileValue);
    if (biome) {
      return this.formatColor(biome.color);
    }
    return 'transparent';
  }
  formatColor(color: number[]){
    const [r, g, b] = color; // Zerlege das Array in die einzelnen Farbwerte
      return `rgb(${r}, ${g}, ${b})`; // Erstelle den CSS-Farbwert
  }

  getTileSymbol(tileValue: number): string {
    const biome = biom.find(b => b.id === tileValue);
    return biome ? biome.icon : 'empty';
}


  setTile(row: number, col: number) {
    if (this.selectedBiome) {
      this.mapArray[row][col] = this.selectedBiome.id;
    }
  }

  fillMapWithSelectedBiome() {
    // Überprüfe zuerst, ob ein Biom ausgewählt ist
    if(this.selectedBiome) {
        // Gehe durch jede Zelle in mapArray und setze sie auf das ausgewählte Biom
        for (let i = 0; i < this.mapArray.length; i++) {
            for (let j = 0; j < this.mapArray[i].length; j++) {
                this.mapArray[i][j] = this.selectedBiome.id;
            }
        }
    } else {
        console.warn("Kein Biom ausgewählt!");
    }
  }


  selectBiome(biome: any) {
    this.selectedBiome = biome;
  }

  saveArray() {
    const blob = new Blob([JSON.stringify(this.mapArray)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'map.json';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  loadArray(event: any) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.mapArray = JSON.parse(e.target.result);
        };
        reader.readAsText(file);
    }
}

  clearArray() {
    this.mapArray = this.mapArray.map(row => row.map(() => 0)); // Setzt alle Werte im Array auf 0
  }
}
