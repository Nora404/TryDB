export interface Biom {
    name: string;
    layout: string;
}

export const biom = {
    1: {
        name: 'grass',
        layout: 'kachelGreen',
       },
    2: {
        name: 'tree',
        layout: 'kachelTree',
       },
    3: {
        name: 'flower',
        layout: 'kachelFlower',
       },
    4: {
        name: 'water',
        layout: 'kachelWater',
       },
    5: {
        name: 'star',
        layout: 'kachelStar',
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