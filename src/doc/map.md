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
            <img src="../assets/mapIcons/grass.svg" class="symbol"> 1.1 Wiese<br>
            <img src="../assets/mapIcons/flower.svg" class="symbol"> 1.2 Blumen
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
            <img src="../assets/mapIcons/love.svg" class="symbol"> 2.1 Feld<br>
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
            <img src="../assets/mapIcons/tree.svg" class="symbol"> 3.1 Tannenwald<br>
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
            <img src="../assets/mapIcons/forest.svg" class="symbol"> 3.1 Dichter Tannenwald<br>
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
            <img src="../assets/mapIcons/love.svg" class="symbol"> 4.1 Laubwald<br>
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
            <img src="../assets/mapIcons/love.svg" class="symbol"> 5.1 Dichter Laubwald<br>
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
            <img src="../assets/mapIcons/love.svg" class="symbol"> 6.1 Flaches Wasser<br>
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
            <img src="../assets/mapIcons/water.svg" class="symbol"> 7.1 Fluss<br>
            <img src="../assets/mapIcons/brigeV.svg" class="symbol"> 7.2 Brücke Vertikal<br>
            <img src="../assets/mapIcons/brigeH.svg" class="symbol"> 7.3 Brücke Horizontal<br>
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
            <img src="../assets/mapIcons/love.svg" class="symbol"> 8.1 Tiefes Wasser<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td colspan="8">Sand</td>
    </tr>
    <tr>
        <td><div style="background-color: #ab9c5f;" class="tile"></div></td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 9.1 Sand<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>      
    <tr>
        <td colspan="8">Gestein</td>
    </tr>
    <tr>
        <td><div style="background-color: #73706b;" class="tile"></div></td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 10.1 Gestein<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr> 
    <tr>
        <td colspan="8">Gebirge</td>
    </tr>
    <tr>
        <td><div style="background-color: #525252;" class="tile">X</div></td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 11.1 Gebirge<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>    
    <tr>
        <td colspan="8">Steinwände</td>
    </tr>
    <tr>
        <td><div style="background-color: #363231;" class="tile">X</div></td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 12.1 Steinwände<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>   
    <tr>
        <td colspan="8">Klippen</td>
    </tr>
    <tr>
        <td><div style="background-color: #131313;" class="tile">X</div></td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 13.1 Klippen<br>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 13.2 Höhle<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>   
    <tr>
        <td colspan="8">Schnee</td>
    </tr>
    <tr>
        <td><div style="background-color: #b5b5bd;" class="tile"></div></td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 14.1 Schnee<br>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>      
</table>
