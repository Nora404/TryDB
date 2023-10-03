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
    typ:         string; // Zutaten, Material, Zeug ...
    ekPrice:     number; // Einkaufs-Preis
    vkPrice:     number; // Verkaufs-Preis
    discription: string; // Beschreibung
}

export interface Skill {
    id?:         number;
    name:        string;
    typ:         string; // Zauber, Angriff, Heilung, ...
    element:     string; // Wasser, Feuer, Physisch ...
    need:        string; // Mana?
    kost:        number; // Wieviel Mana?
    force:       number; // Wie hoch ist Heilung oder Schaden?
    critForce:   number; // Wie viel zusatz Schaden macht ein Krit?
    critChance:  number; // Wie warscheinlich ist ein Krit in %
    discription: string; // Beschreibung
}

export interface Equipment {
    id?:         number;
    name:        string;
    typ:         string; // Waffe, Schmuck, Rüstung, Gegenstand ...
    effect:      string; // Schaden, Heilung, Buff ...
    power:       number; // Wie hoch ist der Effekt
    ekPrice:     number; // Einkaufs-Preis
    vkPrice:     number; // Verkaufs-Preis
    discription: string; // Beschreibung
}

export interface Progress {
    id?:      number;
    name:     string;
    category: string; // Gelöste Quests, Schalter, ...
    value:    any;    // Warscheinlich meist ein Boolean
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