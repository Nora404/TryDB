import Dexie, {Table} from "dexie";

export interface Player {
    id?: number;
    name: string;
    race: string;
    class: string;
    hp: number;
    mana: number;
    gold: number;
}

export interface Item {
    id?: number;
    playerId: number;
    name: string;
    typ: string;
    count: number,
    ekPrice: number;
    vkPrice: number;
}

export class AppDB extends Dexie {
    player_DB!: Table<Player, number>;
    items_DB!: Table<Item, number>;

    constructor(){
        super('ngdexieliveQuery');
        this.version(2).stores({
            player_DB: '++id, hp, mana, gold',
            items_DB: '++id, playerId, name, typ, count, ekPrice, vkPrice',
        });
        this.on('populate', ()=> this.populate());
    }

    async populate(){
        const playerId = await db.player_DB.add({
            name: 'Player',
            race: 'Mensch',
            class: 'Bewohner',
            hp: 100,
            mana: 10,
            gold: 50,
        });
        
        await db.items_DB.bulkAdd([
            {
                playerId,
                name: 'Stein',
                typ: 'Material',
                count: 3,
                ekPrice: 5,
                vkPrice: 1,
            },
            {
                playerId,
                name: 'Apfel',
                typ: 'Zutat',
                count: 1,
                ekPrice: 10,
                vkPrice: 5,
            }
        ]);
    }

    async resetDB(){
        await db.transaction('rw', 'player_DB', 'items_DB', ()=> {
          this.player_DB.clear();
          this.items_DB.clear();
          this.populate();
        });
      }
}

export const db = new AppDB();