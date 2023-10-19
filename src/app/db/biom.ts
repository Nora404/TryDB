export interface Biom {
    name: string;
    icon: string;
    color: number[],
    discription: string;
    events: []
}

export const EmptyBiom: Biom = {
    name: "",
    icon: "",
    color: [100,100,100],
    discription: "",
    events: [],
}

export const biom: {[key: number]: Biom} = {
    1: {
        name: 'Auf einer Wiese',
        icon: 'grass',
        color: [135, 167, 135],
        discription: 'Weit und breit wächst nur Gras',
        events: [],
       },
    2: {
        name: 'Im Wald',
        icon: 'tree',
        color: [71, 124, 108],
        discription: 'Man sieht lauter Bäume',
        events: [],
       },
    3: {
        name: 'Eine Blumenwiese',
        icon: 'flower',
        color: [177, 125, 164],
        discription: 'Wilde Blumen sind überall gewachsen',
        events: [],
       },
    4: {
        name: 'Am Fluss',
        icon: 'water',
        color: [93, 125, 172],
        discription: 'Das Wasser ist klar und kalt',
        events: [],
       },
    5: {
        name: 'Etwas Besonderes',
        icon: 'star',
        color: [212, 186, 97],
        discription: 'Hier ist doch irgend etwas!',
        events: [],
       },
  }

 