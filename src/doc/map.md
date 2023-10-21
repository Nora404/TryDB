<style>
    .tile{
        width: 55px;
        height: 55px;
        float: left;
        margin: 0 10px 0 0;
    }
    .symbol{
        width: 30px;
        height: 30px;
        margin: 0 5px 0 0;
    }
</style>

### MAP

Die Karte besteht aus quadratichen Kacheln, die Biome genannt werden. Sie haben eine Hintergrundfarbe und ein Symbol im SVG-Format. Diese Symbole haben maximal zwei Volltonfarben. Kacheln die in dieser Liste mit einem <b>X</b> makiert sind, sind undurchdrinbar und meist als Kartenrand oder Abgrenzung gedacht. Es gibt noch Varianten die den gleichen Hintergund, aber ein anderes Symbol besitzten. Dort befinden sich andere Ereignisse.
(Jede Kachel hat bis zu drei aktive Ereignisse die je bis zu drei aktive Aktionen haben)

<img src="./img/map.png">

Die Hintergrundfarbe wird mithilfe einer Funktion random leicht verändert, um die Karte lebendiger zu gestalten. Die Farben der Symbole lassen sich zur Zeit nicht per Code verändern und sind fix (Hardcodiert)

<hr>

### Naturboden

<table>
    <tr>
        <td>Wiese</td>
        <td>Varianten</td>
        <td>Begegnungen</td>
        <td>Kreaturen</td>
        <td>Gegenstände</td>
        <td>Erforschung</td>
        <td>Eingang</td>
        <td>Veränderung</td>
    </tr>
    <tr>
        <td><div style="background-color: #87a787;" class="tile"></div></td>
        <td>
            <img src="../assets/mapIcons/grass.svg" class="symbol"> Wiese<br>
            <img src="../assets/mapIcons/flower.svg" class="symbol"> Blumen
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

<div style="background-color: #8F9C52;" class="tile"></div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Feld</b><br><br>

<img src="../assets/mapIcons/flower.svg" class="symbol"> <b>Blumenwiese</b><br>
<img src="../assets/mapIcons/nothing.svg" class="symbol"> <b>Gebäude</b><br>

<hr>

### Wald

<div style="background-color: #477c6c;" class="tile"></div>
<img src="../assets/mapIcons/tree.svg" class="symbol"><br>
<b>Tannenwald</b> <br><br>

<div style="background-color: #233D35;" class="tile">X</div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Dichter Tannenwald</b><br><br>

<div style="background-color: #5A733F;" class="tile"></div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Laubwand</b><br><br>

<div style="background-color: #28331C;" class="tile">X</div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Dichter Laubwand</b><br><br>

<hr>

### Wasser

<div style="background-color: #304069;" class="tile">x</div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Tiefes Wasser</b><br><br>

<div style="background-color: #5d7dac;" class="tile">X</div>
<img src="../assets/mapIcons/water.svg" class="symbol"><br>
<b>Fluss</b> <br><br>

<div style="background-color: #4C8491;" class="tile"></div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Flaches Wasser</b><br><br>

<img src="../assets/mapIcons/brigeV.svg" class="symbol"> <b>Brücke Vertikal</b><br>
<img src="../assets/mapIcons/brigeH.svg" class="symbol"> <b>Brücke Horizontal</b><br>

<hr>

### Stein

<div style="background-color: #AB9C5F;" class="tile"></div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Sand</b><br><br>

<div style="background-color: #73706B;" class="tile"></div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Gestein</b><br><br>

<div style="background-color: #525252;" class="tile">X</div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Gebirge</b><br><br>

<div style="background-color: #363231;" class="tile">X</div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Steinwände</b><br><br>

<div style="background-color: #131313;" class="tile">X</div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Klippen</b><br><br>

<img src="../assets/mapIcons/nothing.svg" class="symbol"> <b>Höhle</b><br>

<hr>

### Element

<div style="background-color: #B5B5BD;" class="tile"></div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Schnee</b><br><br>

<hr>

### Bauwerk

<div style="background-color: #362C26;" class="tile">X</div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Holzwände</b><br><br>

<div style="background-color: #82624D;" class="tile"></div>
<img src="../assets/mapIcons/nothing.svg" class="symbol"><br>
<b>Holzboden</b><br><br>
