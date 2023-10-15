export interface Biom {
    name: string;
    icon: string;
    color: number[],
    layout: string;
    discription: string;
}


export const biom = {
    1: {
        name: 'Auf einer Wiese',
        icon: 'nothing',
        color: [
            135 + (Math.floor(Math.random() * 1)), 
            167 + (Math.floor(Math.random() * 1)), 
            135 + (Math.floor(Math.random() * 1))],
        discription: 'Weit und breit wächst nur Gras',
       },
    2: {
        name: 'Im Wald',
        icon: 'tree',
        color: [71, 124, 108],
        discription: 'Man sieht lauter Bäume',
       },
    3: {
        name: 'Eine Blumenwiese',
        icon: 'flower',
        color: [177, 125, 164],
        discription: 'Wilde Blumen sind überall gewachsen',
       },
    4: {
        name: 'Am Fluss',
        icon: 'water',
        color: [93, 125, 172],
        discription: 'Das Wasser ist klar und kalt',
       },
    5: {
        name: 'Etwas Besonderes',
        icon: 'star',
        color: [212, 186, 97],
        discription: 'Hier ist doch irgend etwas!',
       },
  }

export const  tryMap = [
        [biom[2],biom[2],biom[3],biom[1],biom[5],biom[1],biom[4],biom[1]],
        [biom[2],biom[2],biom[2],biom[1],biom[3],biom[4],biom[1],biom[1]],
        [biom[2],biom[2],biom[1],biom[4],biom[4],biom[2],biom[1],biom[2]],
        [biom[2],biom[1],biom[4],biom[4],biom[1],biom[1],biom[1],biom[1]],
        [biom[1],biom[1],biom[4],biom[1],biom[1],biom[1],biom[2],biom[1]],
        [biom[2],biom[4],biom[4],biom[1],biom[1],biom[3],biom[1],biom[1]],
        [biom[2],biom[2],biom[1],biom[1],biom[3],biom[2],biom[2],biom[1]],
        [biom[2],biom[2],biom[1],biom[1],biom[1],biom[2],biom[1],biom[1]],
        [biom[2],biom[2],biom[1],biom[1],biom[1],biom[2],biom[1],biom[1]]
];  