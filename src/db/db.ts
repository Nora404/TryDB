import Dexie, {Table} from "dexie";

// Für jede Tabelle wird ein Interface geschrieben
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

// -----------------------------------------------------------------------------------------

export class AppDB extends Dexie {
    // Das sind die Namen der einzelnen Tabellen
    player_DB!: Table<Player, number>;
    items_DB!: Table<Item, number>;

    // Hier werden die Tabellen in die Datenbank aufgenommen
    // Nach jeder Veränderung der Tabellen muss die version herhöht werden
    // ++ = Auto-Increment Primary Key
    // &  = Einzigartig
    // *  = Mehrere Einträge, z.B ein Array
    // https://dexie.org/docs/Version/Version.stores()
    constructor(){
        super('ngdexieliveQuery');
        this.version(2).stores({
            // Alles was hier steht ist als Index zu sehen
            // Nur nach den bekannten Indexies kann gesucht werden
            player_DB: '++id, hp, mana, gold',
            items_DB: '++id, playerId, name, typ, count, ekPrice, vkPrice',
        });
        // Füllen der noch leeren Tabellen
        this.on('populate', ()=> this.populate());
    }

    async populate(){
        // Mit add wird ein Eintrag der Tabelle hinzugefügt
        const playerId = await db.player_DB.add({
            name: 'Player',
            race: 'Mensch',
            class: 'Bewohner',
            hp: 100,
            mana: 10,
            gold: 50,
        });
        
        // Mit blukAdd wird ein Array der Tabelle hinzugefügt
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
        // Macht genau das was der Name vermuten lässt
        await db.transaction('rw', 'player_DB', 'items_DB', ()=> {
          this.player_DB.clear();
          this.items_DB.clear();
          this.populate();
        });
      }
}

// Herrüber wird die Anwendung auf die Datenbank zugreifen können
export const db = new AppDB();