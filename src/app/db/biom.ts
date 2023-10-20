export interface Biom {
    name: string;
    icon: string;
    color: number[],
    discription: string;
    events: [];
    goWest: boolean;
    goNord: boolean;
    goOst: boolean;
    goSud: boolean;
}

export const EmptyBiom: Biom = {
    name: "",
    icon: "",
    color: [100,100,100],
    discription: "",
    events: [],
    goWest: true,
    goNord: true,
    goOst: true,
    goSud: true,
}

export const biom: {[key: number]: Biom} = {
    1: {
        name: 'Auf einer Wiese',
        icon: 'grass',
        color: [135, 167, 135],
        discription: 'Weit und breit wächst nur Gras',
        events: [],
        goWest: true,
        goNord: true,
        goOst: true,
        goSud: true,
       },
    2: {
        name: 'Im Wald',
        icon: 'tree',
        color: [71, 124, 108],
        discription: 'Man sieht lauter Bäume',
        events: [],
        goWest: true,
        goNord: true,
        goOst: true,
        goSud: true,
       },
    3: {
        name: 'Eine Blumenwiese',
        icon: 'flower',
        color: [135, 167, 135],
        discription: 'Wilde Blumen sind überall gewachsen',
        events: [],
        goWest: true,
        goNord: true,
        goOst: true,
        goSud: true,
       },
    4: {
        name: 'Am Fluss',
        icon: 'water',
        color: [93, 125, 172],
        discription: 'Das Wasser ist klar und kalt',
        events: [],
        goWest: false,
        goNord: false,
        goOst: false,
        goSud: false,
       },
    5: {
        name: 'Etwas Besonderes',
        icon: 'star',
        color: [212, 186, 97],
        discription: 'Hier ist doch irgend etwas!',
        events: [],
        goWest: true,
        goNord: true,
        goOst: true,
        goSud: true,
       },
       6: {
        name: 'Eine Brücke am Fluss',
        icon: 'brigeH',
        color: [93, 125, 172],
        discription: 'Sieht stabil aus',
        events: [],
        goWest: true,
        goNord: false,
        goOst: true,
        goSud: false,
       },
  }

 