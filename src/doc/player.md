<style>
    .player{
        text-align: center;
    }
    img{
        width: 90px;
        float: left;
        margin: 10px 10px 0 0;
    }
    b{
        color: gray;
    }
</style>

### Player

Die Figur des Players hat außer dem Namen, eine Rasse, ein Geschlecht und einen Hintergrund.
Mit dem Hintergrund ist das gemeint was in anderen Spielen die Klasse ist.
Hier bestimmt es nur die Anfangswerte und die Startausrüstung.

| Rasse  | Geschlecht | Items          | Ausgerüstet | STR | STA | INT | DEF | LUC | HP  |
| ------ | ---------- | -------------- | ----------- | --- | --- | --- | --- | --- | --- |
| Mensch | M/W        | Brot           | Leinenhemd  | +1  | +1  | +2  | +1  | +1  | 25  |
| Elf    | M/W        | Kartoffelsamen | Lederweste  | 0   | +3  | +1  | 0   | +2  | 25  |
| Zwerd  | M/W        | Spitzhacke     | Kettenhemd  | +3  | +1  | 0   | +2  | 0   | 25  |

<hr>

| Hintergrund | Items    | Ausgerüstet | STR | STA | INT | DEF | LUC |
| ----------- | -------- | ----------- | --- | --- | --- | --- | --- |
| Krieger     | Eisenerz | Schwert     | +2  | 0   | 0   | +1  | 0   |
| Jäger       | Wasser   | Bogen       | 0   | +2  | 0   | 0   | +1  |
| Magier      | Buch     | Stab        | 0   | 0   | +2  | 0   | +1  |

<hr>

<table>
    <tr>
        <td>
            <div class="player">
            Menschen<br>
                <img src="../assets/player/humanM.svg">
                <img src="../assets/player/humanW.svg">
            </div>
        </td>
        <td>
            <div class="player">
            Elfen <br>
                <img src="../assets/player/elfM.svg">
                <img src="../assets/player/elfW.svg">
            </div>
        </td>
        <td>
            <div class="player">
            Zwerge<br>
                <img src="../assets/player/dwarfM.svg">
                <img src="../assets/player/dwarfW.svg">
            </div>
        </td>
    </tr>
</table>

<hr>

### Attribute

#### Primärattribute

<b>STR: </b> - Die Stärke. Bestimmt die Effiktivität normaler Angriffe und Blocken.<br>
<b>STA: </b> - Die Geschicklichkeit. Bestimmt die Effiktivität bei Fernkampf und Ausweichen.<br>
<b>INT: </b> - Die Inteligens. Bestimmt die Effiktivität von Zauber und Wahrnehmung.<br>
<b>DEF: </b> - Die Verteidigung. Bestimmt wieviel Schaden durch kommt.<br>
<b>HP: </b> - Die Gesundheit. Bestimmt wievele Treffer der Charakter einstecken kann.<br>

#### Secundattribute

<b>BLO: </b> - Blocken. Verringert den Schaden der durch kommt<br>
<b>AUS: </b> - Ausweichen. Kann den Schaden komplett vermeiden<br>
<b>WAR: </b> - Wahrnehmung. In der Welt kommen Ereignisse öfter vor<br>
<b>KRIT: </b> - Kritisch. Schaden kann verdoppelt werden<br>
<b>LUC: </b> - Glück. Wird auf Zufallswerte zum Positiven addiert.<br>

<hr>

### Buff und Debuff

<b>+ Regeneration: </b> - Über Zeit (Runden) wird die HP wieder hergestellt.<br>
<b>+ Glückssträhne: </b> - Über Zeit (Runden) gelingt dem Betroffenen das Ausweichen besser.<br>
<b>+ Beserker: </b> - Über Zeit (Runden) kann der Betroffene zu x% zweimal angreifen.<br>
<b>+ Schutzengel: </b> - Über Zeit (Runden) überlebt der Betroffene einen Todesstoß mit 1HP.<br>

<b>- Vergiftung: </b> - Über Zeit (Runden) verliert der Betroffene HP.<br>
<b>- Verwirrung: </b> - Über Zeit (Runden) könnte der Betroffene zu x% sich selbst verletzten.<br>
<b>- Geblendet: </b> - Über Zeit (Runden) gehen die Angriffe des Betroffenen zu x% daneben.<br>
<b>- Verletzt: </b> - Über Zeit (Runden) setzt der Betroffene zu x% die Runde aus.<br>

<hr>

### Map-Fähigkeiten

<b>Schwimmen: </b> - Gesperrte Wasserkacheln können nun überquerrt werden.<br>
<b>Klettern: </b> - Gesperrte Wände können nun überquerrt werden.<br>
<b>Springen: </b> - Eine Kachel kann übersprungen werden.<br>
<b>Schleichen: </b> - Die meisten Kreaturen greifen nicht mehr automatisch an.<br>
<b>Durchdringen: </b> - Gesperrte Wälder können nun überquerrt werden.<br>
