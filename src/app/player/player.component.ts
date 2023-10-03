import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item, Player, db } from 'src/db/db';
import { liveQuery } from 'dexie';
import { BagComponent } from '../bag/bag.component';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, BagComponent, FormsModule],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
    player$ = liveQuery(()=> db.player_DB.toArray());

    // Sind mit dem Formular im Template verbunden
    playerName = 'Ein neuer Bewohner';
    playerRace = 'Mensch';
    playerClass = 'Bewohner';

    // Setzt die Datenbank wieder zurück
    async resetPlayer(){
      await db.resetDB();
    }

    // Fügt einen neuen "Player" hinzu
    // Dafür benutzt es die Werte aus dem Formular
    async addNewPlayer(){
      const playerId = await db.player_DB.add({
        name: this.playerName,
        race: this.playerRace,
        class: this.playerClass,
        hp: 100,
        mana: 10,
        gold: 50,
      });  

      // Jenachdem bekommt der Player andere Gegenstände
      // Das sollte später ausgelagert werden!
      switch(this.playerClass){
        case "Krieger":{
          await db.items_DB.add(
            {
              playerId,
              name: 'Eisenerz',
              typ: 'Material',
              count: 3,
              ekPrice: 20,
              vkPrice: 5,
          });
          break;
        }
        case "Magier":{
          await db.items_DB.add(
            {
              playerId,
              name: 'Glitzerstaub',
              typ: 'Material',
              count: 3,
              ekPrice: 20,
              vkPrice: 5,
          });
          break;
        }
        case "Jäger":{
          await db.items_DB.add(
            {
              playerId,
              name: 'Hasenfell',
              typ: 'Material',
              count: 3,
              ekPrice: 20,
              vkPrice: 5,
          });
          break;
        }
        default:{
          await db.items_DB.add(
            {
              playerId,
              name: 'Stein',
              typ: 'Material',
              count: 3,
              ekPrice: 5,
              vkPrice: 1,
          });
          break;
        }
      }
    }

    // Dem Player können Items hinzugefügt werden
    // Dabei wird gefrüft ob er das Item schon besitzt oder nicht
    async addItem(name: string, playerId: number){     

      const item = await db.items_DB
        .where('name')
        .equals(name)
        .and((item)=> item.playerId === playerId)
        .first();

      const haveGold = await this.checkGold(10, playerId);  

      if(item && haveGold){
        await db.items_DB.update(item.id!, {count: item.count + 1});
        this.removeGold(10, playerId);
      } else if (haveGold) {
        await db.items_DB.add({
          playerId,
          name: name,
          typ: 'Zutat',
          count: 1,
          ekPrice: 10,
          vkPrice: 0
        });
        this.removeGold(10, playerId);
      } else {
        alert("Du kannst dir den Apfel nicht leisten!");
      }
      
    }
    
    async checkGold(needGold: number, playerId: number){
      const player = await db.player_DB
        .where('id')
        .equals(playerId)
        .first();

      return (player && player.gold >= needGold) ? true : false;
    }  

    async removeGold(lostGold: number, playerId: number){
      const player = await db.player_DB
        .where('id')
        .equals(playerId)
        .first()

      if(player){
        await db.player_DB.update(playerId, {gold: player.gold - lostGold})
      }  
    }
}
