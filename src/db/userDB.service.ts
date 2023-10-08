import { Injectable } from '@angular/core';
import { tryDB } from './db';
import { liveQuery } from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class UserDBService {
  player$ = liveQuery(()=> tryDB.player_DB.toArray());

  async test(){
    const activPlayer = await tryDB.player_DB
    .where('activ')
    .equals(1)
    .first();
    console.log(activPlayer);
  }

  async checkIfPlayerExists(){
    try {
      const userExists = await tryDB.player_DB.count() > 0;
      return userExists ? true : false;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async createNewPlayer(name:string, race:string, job:string){
    // TODO Alle anderen player müssen active: 0
    // Boolean können nicht in einer DB gespeichert werden
    await tryDB.player_DB.add({
      activ: 1,
      name,
      race,
      job,
      hp: 100,
      mana: 10,
      gold: 50,
      str: 0,
      sta: 0,
      int: 0,
      def: 0,
      skills: [],
      equipment: [],
      progress: [],
      items: []
    });  

  }

  async killPlayer(){
    await tryDB.player_DB.clear();
  }

  playerStats(index: number = 0){
    let player = {
      name: 'Nobody',
      race: 'Mensch',
      job: 'Krieger',
      hp: 100,
      mana: 10,
      gold: 50,
      str: 0,
      sta: 0,
      int: 0,
      def: 0,
    }; 

    try{
      tryDB.player_DB.toArray().then(a=>{
        player.name = a[index].name;
        player.race = a[index].race;
        player.job = a[index].job;
        player.hp = a[index].hp;
        player.mana = a[index].mana;
        player.gold = a[index].gold;
        player.str = a[index].str;
        player.sta = a[index].sta;
        player.int = a[index].int;
        player.def = a[index].def;
      });
    } catch(err) {console.log(err);}

    return player;
  }
}
