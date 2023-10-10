export interface Biom {
    name: string;
    icon: string;
    layout: string;
    discription: string;
}

export const biom = {
    1: {
        name: 'Auf einer Wiese',
        icon: 'nothing',
        layout: 'kachelGreen',
        discription: 'Weit und breit wächst nur Gras',
       },
    2: {
        name: 'Im Wald',
        icon: 'tree',
        layout: 'kachelTree',
        discription: 'Man sieht lauter Bäume',
       },
    3: {
        name: 'Eine Blumenwiese',
        icon: 'flower',
        layout: 'kachelFlower',
        discription: 'Wilde Blumen sind überall gewachsen',
       },
    4: {
        name: 'Am Fluss',
        icon: 'water',
        layout: 'kachelWater',
        discription: 'Das Wasser ist klar und kalt',
       },
    5: {
        name: 'Etwas Besonderes',
        icon: 'star',
        layout: 'kachelStar',
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