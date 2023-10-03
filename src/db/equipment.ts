import { Equipment } from "./db";

export const equipmentList: Equipment[] = [
    {
        name: 'Holzschwert',
        typ: 'Nahkampf',
        effect: 'Schaden',
        power: 15,
        ekPrice: 20,
        vkPrice: 5,
        discription: 'Kinder spielen damit',
    },
    {
        name: 'Einfacher Bogen',
        typ: 'Fernkampf',
        effect: 'Schaden',
        power: 10,
        ekPrice: 20,
        vkPrice: 5,
        discription: 'Er macht was er soll',
    },
    {
        name: 'Stab',
        typ: 'Nahkampf',
        effect: 'Schaden',
        power: 8,
        ekPrice: 15,
        vkPrice: 3,
        discription: 'Nicht mehr wie ein Stock',
    },
];