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
    .event{
        width: 25px;
        height: 25px;
        float: left;
        margin: 0 5px 0 0;
    }
</style>

<p style="color: red">Leider sieht diese Datei in GitHub schrecklich aus<br>
In VSC kann die Vorschau ohne Probleme den html und css Code erkennen</p>

### MAP

Die Karte besteht aus quadratichen Kacheln, die Biome genannt werden. Sie haben eine Hintergrundfarbe und ein Symbol im SVG-Format. Diese Symbole haben maximal zwei Volltonfarben. Kacheln die in dieser Liste mit einem <b>X</b> makiert sind, sind undurchdrinbar und meist als Kartenrand oder Abgrenzung gedacht. Es gibt noch Varianten die den gleichen Hintergund, aber ein anderes Symbol besitzten. Dort befinden sich andere Ereignisse.
(Jede Kachel hat bis zu drei aktive Ereignisse die je bis zu drei aktive Aktionen haben)

<img src="./img/map.png">

Die Hintergrundfarbe wird mithilfe einer Funktion random leicht verändert, um die Karte lebendiger zu gestalten. Die Farben der Symbole lassen sich zur Zeit nicht per Code verändern und sind fix (Hardcodiert)

<hr>

### Biome

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
            <img src="../assets/mapIcons/grass.svg" class="symbol" style="widht: 30px"> Wiese<br>
            <img src="../assets/mapIcons/flower.svg" class="symbol" style="widht: 30px"> Blumen
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="8">Feld</td>
    </tr>
    <tr>
        <td><div style="background-color: #8F9C52;" class="tile"></div></td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol" style="widht: 30px"> Feld<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="8">Tannenwald</td>
    </tr>
    <tr>
        <td><div style="background-color: #477c6c;" class="tile"></div></td>
        <td>
            <img src="../assets/mapIcons/tree.svg" class="symbol" style="widht: 30px"> Tannenwald<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr> 
    <tr>
        <td colspan="8">Dichter Tannenwald</td>
    </tr>
    <tr>
        <td><div style="background-color: #233d35;" class="tile">X</div></td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol" style="widht: 30px"> Dichter Tannenwald<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>    
    <tr>
        <td colspan="8">Laubwald</td>
    </tr>
    <tr>
        <td><div style="background-color: #5a733f;" class="tile"></div></td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol" style="widht: 30px"> Laubwald<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>  
    <tr>
        <td colspan="8">Dichter Laubwald</td>
    </tr>
    <tr>
        <td><div style="background-color: #28331c;" class="tile">X</div></td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol" style="widht: 30px"> Dichter Laubwald<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>      
    <tr>
        <td colspan="8">Flaches Wasser</td>
    </tr>
    <tr>
        <td><div style="background-color: #4c8491;" class="tile"></div></td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol" style="widht: 30px"> Flaches Wasser<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr> 
    <tr>
        <td colspan="8">Fluss</td>
    </tr>
    <tr>
        <td><div style="background-color: #5d7dac;" class="tile">X</div></td>
        <td>
            <img src="../assets/mapIcons/water.svg" class="symbol" style="widht: 30px"> Fluss<br>
            <img src="../assets/mapIcons/brigeV.svg" class="symbol" style="widht: 30px"> Brücke Vertikal<br>
            <img src="../assets/mapIcons/brigeH.svg" class="symbol" style="widht: 30px"> Brücke Horizontal<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>          
    <tr>
        <td colspan="8">Tiefes Wasser</td>
    </tr>
    <tr>
        <td><div style="background-color: #304069;" class="tile">X</div></td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol" style="widht: 30px"> Tiefes Wasser<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr> 
</table>

<hr>

### Stein

<div style="background-color: #AB9C5F;" class="tile"></div>
<img src="../assets/mapIcons/nothing.svg" class="symbol" style="widht: 30px"><br>
<b>Sand</b><br><br>

<div style="background-color: #73706B;" class="tile"></div>
<img src="../assets/mapIcons/nothing.svg" class="symbol" style="widht: 30px"><br>
<b>Gestein</b><br><br>

<div style="background-color: #525252;" class="tile">X</div>
<img src="../assets/mapIcons/nothing.svg" class="symbol" style="widht: 30px"><br>
<b>Gebirge</b><br><br>

<div style="background-color: #363231;" class="tile">X</div>
<img src="../assets/mapIcons/nothing.svg" class="symbol" style="widht: 30px"><br>
<b>Steinwände</b><br><br>

<div style="background-color: #131313;" class="tile">X</div>
<img src="../assets/mapIcons/nothing.svg" class="symbol" style="widht: 30px"><br>
<b>Klippen</b><br><br>

<img src="../assets/mapIcons/nothing.svg" class="symbol" style="widht: 30px"> <b>Höhle</b><br>

<hr>

### Element

<div style="background-color: #B5B5BD;" class="tile"></div>
<img src="../assets/mapIcons/nothing.svg" class="symbol" style="widht: 30px"><br>
<b>Schnee</b><br><br>

<hr>

### Bauwerk

<div style="background-color: #362C26;" class="tile">X</div>
<img src="../assets/mapIcons/nothing.svg" class="symbol" style="widht: 30px"><br>
<b>Holzwände</b><br><br>

<div style="background-color: #82624D;" class="tile"></div>
<img src="../assets/mapIcons/nothing.svg" class="symbol" style="widht: 30px"><br>
<b>Holzboden</b><br><br>
