export interface Biom {
    id: number;
    name: string;
    icon: string;
    color: number[],
    discription: string;
    events: string[];
    west: boolean;
    nord: boolean;
    ost: boolean;
    sud: boolean;
}

export const EmptyBiom: Biom = {
    id: 0,
    name: "",
    icon: "",
    color: [100,100,100],
    discription: "",
    events: [],
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
        events: [],
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
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
        west: true,
        nord: true,
        ost: true,
        sud: true,
       },
       {   
        id: 2,
        name: 'Blumen',
        icon: 'flower',
        color: [135, 167, 135],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
        west: true,
        nord: true,
        ost: true,
        sud: true,
       },    
       {   
        id: 3,
        name: 'Gebäude',
        icon: 'home',
        color: [135, 167, 135],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
        west: false,
        nord: false,
        ost: false,
        sud: true,
       },   
       {   
        id: 4,
        name: 'Feld',
        icon: 'sprout',
        color: [160, 175, 100],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
        west: true,
        nord: true,
        ost: true,
        sud: true,
       }, 
       {   
        id: 5,
        name: 'Mühle',
        icon: 'mill',
        color: [160, 175, 100],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
        west: false,
        nord: false,
        ost: false,
        sud: true,
       }, 
       {   
        id: 6,
        name: 'Brunnen',
        icon: 'spring',
        color: [160, 175, 100],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
        west: true,
        nord: true,
        ost: true,
        sud: true,
       }, 
       {   
        id: 7,
        name: 'Tannenwald',
        icon: 'tree',
        color: [71, 124, 108],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
        west: true,
        nord: true,
        ost: true,
        sud: true,
       },
       {   
        id: 8,
        name: 'Dichter Tannenwald',
        icon: 'forest',
        color: [35, 61, 53],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
        west: false,
        nord: false,
        ost: false,
        sud: false,
       },
       {   
        id: 9,
        name: 'Laubwald',
        icon: 'nothing',
        color: [90, 115, 63],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
        west: true,
        nord: true,
        ost: true,
        sud: true,
       },
       {   
        id: 10,
        name: 'Dichter Laubwald',
        icon: 'nothing',
        color: [40, 51, 28],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
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
        events: [],
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
        events: [],
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
        events: [],
        west: false,
        nord: true,
        ost: false,
        sud: true,
       },
       {   
        id: 14,
        name: 'Fluss',
        icon: 'brigeH',
        color: [93, 125, 172],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
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
        events: [],
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
        events: [],
        west: true,
        nord: true,
        ost: true,
        sud: true,
       },
       {   
        id: 17,
        name: 'Gestein',
        icon: 'nothing',
        color: [115, 112, 107],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
        west: true,
        nord: true,
        ost: true,
        sud: true,
       },
       {   
        id: 18,
        name: 'Gebierge',
        icon: 'nothing',
        color: [82, 82, 82],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
        west: true,
        nord: true,
        ost: true,
        sud: true,
       },
       {   
        id: 19,
        name: 'Steinwände',
        icon: 'nothing',
        color: [54, 50, 49],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
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
        events: [],
        west: false,
        nord: false,
        ost: false,
        sud: false,
       },
       {   
        id: 21,
        name: 'Höhlen',
        icon: 'nothing',
        color: [19, 19, 19],
        discription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean',
        events: [],
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
        events: [],
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
        events: [],
        west: true,
        nord: true,
        ost: true,
        sud: true,
       },
    ]

 