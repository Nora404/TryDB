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

### Biom

Die Karte besteht aus quadratichen Kacheln, die Biome genannt werden. Sie haben eine Hintergrundfarbe und ein Symbol im SVG-Format. Diese Symbole haben maximal zwei Volltonfarben. Kacheln die in dieser Liste mit einem <b>X</b> makiert sind, sind undurchdrinbar und meist als Kartenrand oder Abgrenzung gedacht. Es gibt noch Varianten die den gleichen Hintergund, aber ein anderes Symbol besitzten. Dort befinden sich andere Ereignisse.
(Jede Kachel hat bis zu drei aktive Ereignisse die je bis zu drei aktive Aktionen haben)

<img src="./img/map.png">

Die Hintergrundfarbe wird mithilfe einer Funktion random leicht verändert, um die Karte lebendiger zu gestalten. Die Farben der Symbole lassen sich zur Zeit nicht per Code verändern und sind fix (Hardcodiert)

Es gibt

- Böden, (immer begehbar)
- Wasser, (benötigt Schwimmen)
- Wälder, (benötigt Durchdringen)
- Wände, (benötigt Klettern)

<hr>

### Biome

<table>
    <tr>
        <td>Wiese</td>
        <td>Varianten</td>
        <td>Begegnungen</td>
        <td>Kreaturen</td>
        <td>Gegenstände</td>
        <td>Entdecken</td>
    </tr>
    <tr>
        <td><div style="background-color: #87a787;" class="tile"></div><br>#87a787</td>
        <td>
            <img src="../assets/mapIcons/grass.svg" class="symbol"> 1 Wiese<br>
            <img src="../assets/mapIcons/flower.svg" class="symbol"> 2 Blumen<br>
            <img src="../assets/mapIcons/home.svg" class="symbol"> 3 Gebäude<br>
        </td>
        <td id="npcs">Bauer (Q)<br>Bäuerin (Q)</td>
        <td id="angr">Schlange (10%)<br>Biene (50% Blumen)</td>
        <td id="item">Brot (Gebäude)<br>Suppe (Gebäude)</td>
        <td id="such">Feldweg</td>
    </tr>
    <tr>
        <td colspan="6">Feld</td>
    </tr>
    <tr>
        <td><div style="background-color: #8F9C52;" class="tile"></div><br>#8F9C52</td>
        <td>
            <img src="../assets/mapIcons/sprout.svg" class="symbol"> 4 Feld<br>
            <img src="../assets/mapIcons/mill.svg" class="symbol"> 5 Mühle<br>
            <img src="../assets/mapIcons/spring.svg" class="symbol"> 6 Brunnen<br>
        </td>
        <td id="npcs">Vogelscheuche</td>
        <td id="angr">Ratte (25%)<br>Käfer (10%)</td>
        <td id="item">Kartoffeln<br>Zwiebeln<br>Weizen<br>Wasser (Brunnen)<br>Mehl (Mühle)</td>
        <td id="such"></td>
    </tr>
    <tr>
        <td colspan="6">Tannenwald</td>
    </tr>
    <tr>
        <td><div style="background-color: #477c6c;" class="tile"></div><br>#477c6c</td>
        <td>
            <img src="../assets/mapIcons/tree.svg" class="symbol"> 7 Tannenwald<br>
        </td>
        <td id="npcs"></td>
        <td id="angr">Wolf (50%)</td>
        <td id="item">Hartholz<br>Pilze</td>
        <td id="such">Hohler Baumstumpf</td>
    </tr> 
    <tr>
        <td colspan="6">Dichter Tannenwald</td>
    </tr>
    <tr>
        <td><div style="background-color: #233d35;" class="tile">X</div><br>#233d35</td>
        <td>
            <img src="../assets/mapIcons/forest.svg" class="symbol"> 8 Dichter Tannenwald<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item"></td>
        <td id="such"></td>
    </tr>    
    <tr>
        <td colspan="6">Laubwald</td>
    </tr>
    <tr>
        <td><div style="background-color: #5a733f;" class="tile"></div><br>#5a733f</td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 9 Laubwald<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item">Holz<br>Beeren</td>
        <td id="such">Dichtes Gestrüpp</td>
    </tr>  
    <tr>
        <td colspan="6">Dichter Laubwald</td>
    </tr>
    <tr>
        <td><div style="background-color: #28331c;" class="tile">X</div><br>#28331c</td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 10 Dichter Laubwald<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item"></td>
        <td id="such"></td>
    </tr>      
    <tr>
        <td colspan="6">Flaches Wasser</td>
    </tr>
    <tr>
        <td><div style="background-color: #4c8491;" class="tile"></div><br>#4c8491</td>
        <td>
            <img src="../assets/mapIcons/waterFlat.svg" class="symbol"> 11 Flaches Wasser<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item">Fische<br>Wasser</td>
        <td id="such">Glitzer</td>
    </tr> 
    <tr>
        <td colspan="6">Fluss</td>
    </tr>
    <tr>
        <td><div style="background-color: #5d7dac;" class="tile">X</div><br>#5d7dac</td>
        <td>
            <img src="../assets/mapIcons/water.svg" class="symbol"> 12 Fluss<br>
            <img src="../assets/mapIcons/brigeV.svg" class="symbol"> 13 Brücke Vertikal<br>
            <img src="../assets/mapIcons/brigeH.svg" class="symbol"> 14 Brücke Horizontal<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item"></td>
        <td id="such"></td>
    </tr>          
    <tr>
        <td colspan="6">Tiefes Wasser</td>
    </tr>
    <tr>
        <td><div style="background-color: #304069;" class="tile">X</div><br>#304069</td>
        <td>
            <img src="../assets/mapIcons/waterDeep.svg" class="symbol"> 15 Tiefes Wasser<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item"></td>
        <td id="such"></td>
    </tr>
    <tr>
        <td colspan="6">Sand</td>
    </tr>
    <tr>
        <td><div style="background-color: #ab9c5f;" class="tile"></div><br>#ab9c5f</td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 16 Sand<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item">Sand</td>
        <td id="such"></td>
    </tr>      
    <tr>
        <td colspan="6">Gestein</td>
    </tr>
    <tr>
        <td><div style="background-color: #73706b;" class="tile"></div><br>#73706b</td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 17 Gestein<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item">Stein<br>Eisenerz</td>
        <td id="such"></td>
    </tr> 
    <tr>
        <td colspan="6">Gebirge</td>
    </tr>
    <tr>
        <td><div style="background-color: #525252;" class="tile">X</div><br>#525252</td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 18 Gebirge<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item"></td>
        <td id="such"></td>
    </tr>    
    <tr>
        <td colspan="6">Steinwände</td>
    </tr>
    <tr>
        <td><div style="background-color: #363231;" class="tile">X</div><br>#363231</td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 19 Steinwände<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item"></td>
        <td id="such"></td>
    </tr>   
    <tr>
        <td colspan="6">Klippen</td>
    </tr>
    <tr>
        <td><div style="background-color: #131313;" class="tile">X</div><br>#131313</td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 20 Klippen<br>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 21 Höhle<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item"></td>
        <td id="such"></td>
    </tr>   
    <tr>
        <td colspan="6">Schnee</td>
    </tr>
    <tr>
        <td><div style="background-color: #b5b5bd;" class="tile"></div><br>#b5b5bd</td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 22 Schnee<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item"></td>
        <td id="such"></td>
    </tr>      
        <tr>
        <td colspan="6">Weg</td>
    </tr>
    <tr>
        <td><div style="background-color: #73706b;;" class="tile"></div><br>#b5b5bd</td>
        <td>
            <img src="../assets/mapIcons/weg.svg" class="symbol"> 22 Weg<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item"></td>
        <td id="such"></td>
    </tr> 
        </tr>      
        <tr>
        <td colspan="6">Toter Baum</td>
    </tr>
    <tr>
        <td><div style="background-color: #73706b;;" class="tile"></div><br>#b5b5bd</td>
        <td>
            <img src="../assets/mapIcons/love.svg" class="symbol"> 23 Toter Baum<br>
        </td>
        <td id="npcs"></td>
        <td id="angr"></td>
        <td id="item"></td>
        <td id="such"></td>
    </tr> 
</table>

<hr>

### Mögliche weitere Biome

- Wüste
- Ruine
- Kristall
- Sumpf
- Lava
- Vulkan
- Leere
- Dorf (Menschen, Elfen, Zwerge)

Varianten mit besonderen Inhalten wie Handwerk, Gebäude, Besondere Orte, sowas wie ein magischer Baum?