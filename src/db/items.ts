import { Item } from "./db";

export const itemsList: Item[] = [
    {
        name: 'Apfel',
        typ: 'Zutat',
        ekPrice: 10,
        vkPrice: 5,
        discription: 'Leckeres Obst',
    },
    {
        name: 'Stein',
        typ: 'Material',
        ekPrice: 5,
        vkPrice: 1,
        discription: 'Ein einfacher grauer Stein',
    },
    {
        name: 'Glitzer',
        typ: 'Material',
        ekPrice: 60,
        vkPrice: 30,
        discription: 'Es funkelt so schön!',
    },
    {
        name: 'Puppe',
        typ: 'Zeug',
        ekPrice: 20,
        vkPrice: 5,
        discription: 'Sie besteht aus Stoffresten',
    },
    {
        name: 'Hammer',
        typ: 'Werkzeug',
        ekPrice: 50,
        vkPrice: 10,
        discription: 'Ein schweres Werkzeug',
    },
];