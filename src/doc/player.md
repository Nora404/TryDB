<style>
    .player{
        text-align: center;
    }
    img{
        width: 90px;
        float: left;
        margin: 10px 10px 0 0;
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
