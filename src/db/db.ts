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
    id?:   number;
    name:  string;
    value: any;
}