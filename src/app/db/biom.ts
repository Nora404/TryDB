export interface Biom {
    id: number;
    name: string;
    icon: string;
    color: number[],
    discription: string;
    events: ([number, number] | [])[],
    west: boolean;
    nord: boolean;
    ost: boolean;
    sud: boolean;
}

export const EmptyBiom: Biom = {
    id: 0,
    name: "",
    icon: "",
    color: [100, 100, 100],
    discription: "",
    events: [[]],
    west: true,
    nord: true,
    ost: true,
    sud: true,
}

export const biom = [
    {
        id: 0,
        name: 'Nichts',
        icon: 'nothing',
        color: [255, 255, 255],
        discription: 'Nichts',
        events: [[]],
        west: false,
        nord: false,
        ost: false,
        sud: false,
    },
    {
        id: 1,
        name: 'Wiese',
        icon: 'grass',
        color: [135, 167, 135],
        discription: 'm ipsum dolor sit amet, consectetuer adipiscinLorem ipsu',
        events: [[]],
        west: true,
        nord: true,
        ost: true,
        sud: true,
    },
    {
        id: 2,
        name: 'Blumen',
        icon: 'flowers',
        color: [135, 167, 135],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: true,
        nord: true,
        ost: true,
        sud: true,
    },
    {
        id: 3,
        name: 'Gebäude',
        icon: 'wood-cabin',
        color: [135, 167, 135],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: false,
        nord: false,
        ost: false,
        sud: true,
    },
    {
        id: 4,
        name: 'Feld',
        icon: 'wheat',
        color: [160, 175, 100],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: true,
        nord: true,
        ost: true,
        sud: true,
    },
    {
        id: 5,
        name: 'Mühle',
        icon: 'windmill',
        color: [160, 175, 100],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: false,
        nord: false,
        ost: false,
        sud: true,
    },
    {
        id: 6,
        name: 'Brunnen',
        icon: 'well',
        color: [160, 175, 100],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: true,
        nord: true,
        ost: true,
        sud: true,
    },
    {
        id: 7,
        name: 'Tannenwald',
        icon: 'pine-tree',
        color: [71, 124, 108],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: true,
        nord: true,
        ost: true,
        sud: true,
    },
    {
        id: 8,
        name: 'Dichter Tannenwald',
        icon: 'pine-forest',
        color: [35, 61, 53],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: false,
        nord: false,
        ost: false,
        sud: false,
    },
    {
        id: 9,
        name: 'Laubwald',
        icon: 'beech',
        color: [125, 157, 125],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: true,
        nord: true,
        ost: true,
        sud: true,
    },
    {
        id: 10,
        name: 'Dichter Laubwald',
        icon: 'beechForest',
        color: [95, 127, 95],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: false,
        nord: false,
        ost: false,
        sud: false,
    },
    {
        id: 11,
        name: 'Flaches Gewässer',
        icon: 'waterFlat',
        color: [76, 132, 145],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: true,
        nord: true,
        ost: true,
        sud: true,
    },
    {
        id: 12,
        name: 'Fluss',
        icon: 'water',
        color: [93, 125, 172],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: false,
        nord: false,
        ost: false,
        sud: false,
    },
    {
        id: 13,
        name: 'Brücke',
        icon: 'brigeV',
        color: [93, 125, 172],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: false,
        nord: true,
        ost: false,
        sud: true,
    },
    {
        id: 14,
        name: 'Brücke',
        icon: 'brigeH',
        color: [93, 125, 172],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: true,
        nord: false,
        ost: true,
        sud: false,
    },
    {
        id: 15,
        name: 'Ozean',
        icon: 'waterDeep',
        color: [48, 64, 105],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: false,
        nord: false,
        ost: false,
        sud: false,
    },
    {
        id: 16,
        name: 'Sand',
        icon: 'nothing',
        color: [171, 156, 95],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: true,
        nord: true,
        ost: true,
        sud: true,
    },
    {
        id: 17,
        name: 'Gestein',
        icon: 'stone-pile',
        color: [115, 112, 107],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: true,
        nord: true,
        ost: true,
        sud: true,
    },
    {
        id: 18,
        name: 'Gebirge',
        icon: 'nothing',
        color: [82, 82, 82],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: true,
        nord: true,
        ost: true,
        sud: true,
    },
    {
        id: 19,
        name: 'Steinwände',
        icon: 'stone-wall',
        color: [54, 50, 49],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: false,
        nord: false,
        ost: false,
        sud: false,
    },
    {
        id: 20,
        name: 'Klippen',
        icon: 'nothing',
        color: [19, 19, 19],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: false,
        nord: false,
        ost: false,
        sud: false,
    },
    {
        id: 21,
        name: 'Höhlen',
        icon: 'dungeon-gate',
        color: [54, 50, 49],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: false,
        nord: false,
        ost: false,
        sud: true,
    },
    {
        id: 22,
        name: 'Schnee',
        icon: 'nothing',
        color: [181, 181, 189],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: true,
        nord: true,
        ost: true,
        sud: true,
    },
    {
        id: 23,
        name: 'Weg',
        icon: 'weg',
        color: [115, 112, 107],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [[]],
        west: true,
        nord: true,
        ost: true,
        sud: true,
    },
    {
        id: 24,
        name: 'Pilzhütte',
        icon: 'mushroom-house',
        color: [71, 124, 108],
        discription: 'Vor dir steht ein verwunschenes Pilshaus, es sieht einladend und lecker aus.',
        events: [[]],
        west: true,
        nord: false,
        ost: true,
        sud: true,
    },
    {
        id: 25,
        name: 'Burgruine',
        icon: 'castle-ruin',
        color: [85, 81, 68],
        discription: 'Du stehst vor einer verlassenen Burgruine, sie scheint nach dir zu rufen',
        events: [[4, 80], [5, 10]],
        west: true,
        nord: false,
        ost: false,
        sud: true,
    },
]

