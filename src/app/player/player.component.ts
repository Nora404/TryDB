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
    playerName = 'Ein neuer Bewohner';
    playerRace = 'Mensch';
    playerClass = 'Bewohner';

    async resetPlayer(){
      await db.resetDB();
    }

    async addNewPlayer(){
      const playerId = await db.player_DB.add({
        name: this.playerName,
        race: this.playerRace,
        class: this.playerClass,
        hp: 100,
        mana: 10,
        gold: 50,
      });  

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

    async addItem(name: string, playerId: number){
      const existItem: Item | undefined = await db.items_DB
        .where('name')
        .equals(name)
        .and((item)=> item.playerId === playerId)
        .first();

      if(existItem){
        await db.items_DB.update(existItem.id!, {count: existItem.count + 1})
      } else {
        await db.items_DB.add({
          playerId,
          name: name,
          typ: 'Zutat',
          count: 1,
          ekPrice: 10,
          vkPrice: 0
        });
      }
    }
    
}
