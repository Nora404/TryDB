### Items

Es gibt Items die

- (found) man in Biomen findet oder abbaut
- (loot) man von Kreaturen erbeutet
- (tinker) als Zutat oder Rohstoff herstellt
- (craft) an Stationen herstellt
- (buy) man kaufen muss
- (gift) man geschenkt bekommt

<hr>

Es gibt verschiedene Kategorien

- Waffen
- Ausrüstung
- Rohstoffe
- Handwerk
- Verbrauchbares
- Gegenstände

Diese haben weitere Unterkategorien, es geht bis zu vier Ebenen tief. Zum Beispiel gibt es unter Rohstoffe die Pflanzen und diese können in Nahrung, Reagenz und Material aufgeteilt werden. Unter Nahrung währen dann die Beeren zu finden.

```
Rohstoffe -> Pflanzen -> Nahrung -> Beeren
Ausrüstung -> Rüstung -> Stoff -> Wollhemd
Gegenstände -> Schätze -> Münzen
```

<hr>

Items können benutzt, oder verkauft werden. Generell können alle Gegenstände verkauft werden, nicht alle jedoch gekauft. Manche Items müssen nur besessen werden, zum Beispiel weil es Quest-Gegenstände sind. Beim Handwerk werden Items benötigt um andere Items herzustellen. Auch der Zeitpunkt wann Items verwendet werden können ist unterschiedlich. Im Kampf, bei Actionen oder im Handwerk.

<hr>

#### Waffen
 
 ```typescript
namen:         string 
beschreibung:  string
kategorie:     "Schwert" | "Bogen" | "Stab"
angriff:       number
attribut:      "str" | "sta" | "int"
icon:          string  
 ```

 #### Ausrüstung
 
 ```typescript
namen:         string
beschreibung:  string 
kategorie:     "Rüstung" | "Schmuck" | "Ausrüstung"
verteidigung:  number
attribut:      "def" | "luck" | "hp"
icon:          string 
 ```


#### Rohstoffe

```typescript
namen:         string
beschreibung:  string 
kategorie:     "Holz" | "Stein" | "Pflanzen" | "Tier" | "Element" | "Material"
icon:          string
```

#### Handwerk

```typescript
namen:         string
beschreibung:  string 
kategorie:     "Zutat" | "Material" | "Rezept"
icon:          string
```

#### Verbrauchbares

```typescript
namen:         string
beschreibung:  string 
kategorie:     "Gericht" | "Trank" | "Monition" | "Werfen" 
ziel:          "spieler" | "gegner" 
attribut:      "str" | "sta" | "int" | "def" | "luck" | "hp"
kraft:         number
icon:          string
```

#### Gegenstände

```typescript
namen:         string
beschreibung:  string 
kategorie:     "Werkzeug" | "Quest" | "Schätze" 
icon:          string
```

<hr>

#### Wertsteigerung

 ```
Schmuck :    Kupfer     -> Silber    -> Gold       -> Platin       -> Kristall      -> Diamant
Stoff:       Jute       -> Leinen    -> Wolle      -> Baumwolle    -> Seide         -> Brokat
Leder:       Rohleder   -> Wildleder -> Hartleder  -> Starkleder   -> Panzerleder   -> Drachenleder
Schweres:    Holz       -> Kupfer    -> Eisen      -> Stahl        -> Titan         -> Mythril
Nahrung:     Einfach    -> Nahrhaft  -> Delikat    -> Gourmet      -> Exotisch      -> Meisterhaft
Tränke:      Schwach    -> Standard  -> Verstärkt  -> Konzentriert -> Meisterhaft   -> Legendär
Monition:    Übungs     -> Standard  -> Verbessert -> Spezial      -> Experimentell -> Elite
Allgemein:   Gewöhnlich -> Selten    -> Magisch    -> Exotisch     -> Uralt         -> Legendär
```