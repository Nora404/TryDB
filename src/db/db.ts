import Dexie, {Table} from "dexie";

// Zur Übersicht der DB werden die Interfaces hier beschrieben
// So lässt sich leichter lesen was die DB beinhaltet

export interface Player {
    id?:   number;
    name:  string;
    race:  string;
    class: string;
    hp:    number;
    mana:  number;
    str:   number;
    sta:   number;
    int:   number;
    def:   number;
    gold:  number;
    skills:    string[]; // id des Skilles
    equipment: string[]; // id der Ausrüstung
    progress:  string[]; // id des Fortschrittes
    items:     {itemId: number, count: number}[];
}

export interface Item {
    id?:         number;
    name:        string;
    typ:         string;
    ekPrice:     number;
    vkPrice:     number;
    discription: string;
}

export interface Skill {
    id?:         number;
    name:        string;
    typ:         string;
    element:     string;
    need:        string;
    kost:        number;
    force:       number;
    critForce:   number;
    critChance:  number;
    discription: string;
}

export interface Equipment {
    id?:         number;
    name:        string;
    typ:         string;
    effect:      string;
    power:       number;
    ekPrice:     number;
    vkPrice:     number;
    discription: string;
}

export interface Progress {
    id?:      number;
    name:     string;
    category: string;
    value:    any;
}

export class TryDB extends Dexie {
    player_DB!: Table<Player, number>;
    items_DB!: Table<Item, number>;
    skills_DB!: Table<Skill, number>;
    equipment_DB!: Table<Equipment, number>;
    progress_DB!: Table<Progress, number>;

    constructor(){
        super('ngdexieliveQuery');
        this.version(1).stores({
            player_DB: '++id, name, hp, mana, str, sta, int, def, gold, *skills, *equipment, *progress, *items',
            items_DB: '++id, name, typ, ekPrice, vkPrice',
            skills_DB: '++id, name, typ, element, need, kost, force',
            equipment_DB: '++id, name, typ, effect, power, ekPrice, vkPrice',
            progress_DB: '++id, name, category',
        });
        this.on('populate', ()=> this.populate());
    }

    async populate(){}
}