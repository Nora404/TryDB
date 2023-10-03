import { Injectable } from '@angular/core';
import { tryDB } from './db';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  async checkIfPlayerExists(){
    try {
      const userExists = await tryDB.player_DB.count() > 0;
      return userExists ? true : false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async createNewPlayer(){

  }

  async killPlayer(){
    
  }
}
