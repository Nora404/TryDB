### Map

Eine Karte besteht aus Biomen. Zur Zeit besteht eine Karte aus einem mehrdimensionalen Array.
Dieses wird mit dem Map-Editor erstellt und als JSON abgespeichert. Dei Werte des Arrays sind Zahlen, welche für die ID des Bioms stehen

```typescript
tryMap = [
    [1,1,2,1,3],
    [1,2,2,1,3],
    [2,2,2,3,3],
    [1,1,3,3,3],
]
```

Das erste innere Array wird als erste Spalte gerendert. Im Code muss daher die Reihen gedreht werden.
Später sollen die Karten in einer Datenbank gespeichert werden. Um Quests oder einzigartige Events in die Karte einfügen zu können muss das Array erweitert werden. Statt Nummern müssen es dann Objekte werden.

```typescript
{biomID: number, eventID: number[], icon: string}
```

Da eine Quest durch ein Ereignis ausgelöst wird, reicht die Angabe der eventID  
Mit der Angabe eines Icons kann dem Biom ein zusätzliches Symbol gegeben werden, zum Beispiel eine Figur oder ein Hindernis. 

In einer Datenbank kommt noch der Name der Karte, sowie die Position hinzu. Die biomID und eventID sind Fremdschlüssel. Primärschlüssel könnten (map + x + y) sein, finde eine einfache id leichter zu handhaben.
```typescript
{id: number, map: string, x: number, y: number, biomID: number, eventID: number[], icon: string}
```

<hr>

#### Die Klasse (mit JSON-Datei)

Hier werden die wichtigsten Variabeln und Methoden der Komponente Map beschrieben.
Die Komponente macht zur Zeit noch mehr und sollte bei gelegenheit zerlegt werden! Folgende Variabeln werden benötigt:

```typescript
map: Biom[][] // Die Karte mit dem mehrdimensionalen Array

top: number   // Position der Karte in Pixeln (Startposition)
left: number  // Position der Karte in Pixeln (Startposition)
size: number  // Größe der Kacheln in Pixeln 

playgroundWidth: number   // Größe des sichtbaren Spielfeldes in Kacheln = size * <ungrade zahl>
playgroundHeight: number  // Größe des sichtbaren Spielfeldes in Kacheln = size * <ungrade zahl>

maxWidth: number   // Anzahl der Kacheln der gesamten Karte = map.lenght
maxHeight: number  // Anzahl der Kacheln der gesamten Karte = map[0].lenght

tileWidth: number  //Anzahl der Kacheln auf dem sichtbaren Spielfeld = playgroundWidth / size
tileHeight: number //Anzahl der Kacheln auf dem sichtbaren Spielfeld = playgroundHeight / size

tileMiddelWidth: number   // Die Kachel in der Mitte des sichtbaren Spielfeldes = Math.round(tileWidth / 2)
tileMiddelHeigth: number  // Die Kachel in der Mitte des sichtbaren Spielfeldes = Math.round(tileHeight / 2)
```

Folgende Funktionen werden benötigt:

```typescript
ngOnInit() // läd die Karte, setzt die Startposition und die initiale Action

async loadMap(map: string)                  // Läd die Karte und setzt Werte von Membervariabeln
setStartPosition(top: number, left: number) // Die Karte wird verschoben
executeAction(actionID: number)             // Getriggerte Action wird ausgeführt

createStyle() // Steht führ mehrere Funktionen, die sich um das css Layout kümmern

move(direction: 'nord' | 'west' | 'ost' | 'sud')               // Die Karte wird verschoben

findMyPosition(top = this.top, left = this.left)               // Gibt ein Array mit Positionswerte zurück
getMyPositionTile()                                            // Gibt das aktuelle Biom zurück
isPositionAllowed(futureTop: number, futureLeft: number)       // Ende der Karte Abfrage
isWayAllowed(way: 'west' | 'nord' | 'ost' | 'sud', biom: Biom) // Kollisionsabfrage
```

Wird die Komponente geladen wird mit `ngOnInit()` die Karte geladen. Sie benutzt dafür die `async loadMap(map: string)` Funktion. Der Übergabewert ist der Dateiname der Karte. Dann wird der BiomService genutzt und die Karte mit allen Biomen in der Membervariabel `map` gespeichert. Auch `maxWidth` und `maxHeigt` bekommen ihre Werte.

Mit `setStartPosition(top: number, left: number)` wird die Karte so verschoben, das die Figur des Spielers auf der gewünschten Kachel startet. Mit `move()` wird die Karte verschoben, was so ausschaut als ob die Figur über die Karte läuft. Dabei muss immer überprüft werden, ob die Figur den "Schritt" machen darf.

Die Werte des Bioms werden von verschiedenen Funktionen erfragt. Es ist nicht nur notwendig um einen "Schritt" zu machen, es werden auch Farben, Icons und Events abgefragt.

<hr>

#### Der Service

Im Service wird aus dem Array eine Karte erstellt und die Hintergundfarbe ermittelt.
Aus der default Farbe wird ein zufälliger Wert (0-15) addiert

```typescript
getRandomColor(default: number): number
addRandomColorToBiom(biom: Biom): Biom
```

Mit einem fetch in `async loadMap(map: string):Promise<number[][]>` wird das Array geladen.
Es muss eine async Funktion sein, weil sonst alle anderen Funktionen nicht arbeiten können. 
Um nun die Werte passen neu anzuordnen, damit sie richtig gerendert werden, hat der Service die Funktion `rotateMap90Degress(map: number[][]): number[][]` Das Ergebniss wird an `generateMap(map: number[][])` geschickt welches die Map im Service speichert. Dafür benutzt es `getBiomByID(biomCode: number): Biom` welches die zufällige Hintergrundfarbe hinzufügt.  

#### Im Template

Hier zeige ich nur das rendern der Karte. Es wird mit einer verschachtelten Schleife umgesetzt

```html
<div id="playground">
  <div id="map" [ngStyle]="createMapStyle()">
    <div *ngFor="let row of map">
      <div *ngFor="let cell of row" class="kachel" [ngStyle]="createTileStyle(cell)">
        <img [attr.src]="iconUrl(cell.icon)" (error)="iconError($event.target)"/>
      </div>
    </div>
  </div>
  <div id="player" [ngStyle]="createPlayerStyle()">
    <img class="player" [class.hop-up]="isHoppingUp" src="../../../assets/player/humanW.svg"/>
  </div>
</div>
```

Die dazu passenden css Klassen sorgen zum Beispiel dafür das mit `overflow: hidden` nur der Teil der Karte angezeigt wird, der im "Playground" zu sehen ist. Die Map selber ist in einem Grid dessen Beschreibung die Funktion `createMapStyle()` zurück gibt. Dafür werden die Membervariabeln genutzt.
Die meisten css angaben müssen dynamisch generiert werden, weswegen es einige create-Funktionen gibt.

```typescript
  createMapStyle() {
    return {
      'grid-template-columns': 'repeat(' + this.map.length + ',' + this.size + 'px)',
      'grid-template-rows': 'repeat(' + this.map[0].length + ',' + this.size + 'px)',
    }
  }
```