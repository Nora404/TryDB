export interface Biom {
    id: number;
    name: string;
    icon: string;
    color: number[],
    discription: string;
    events: string[];
    goWest: boolean;
    goNord: boolean;
    goOst: boolean;
    goSud: boolean;
}

export const EmptyBiom: Biom = {
    id: 0.0,
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

export const biom = [
    {   
        id: 0.0,
        name: 'Nichts',
        icon: 'nothing',
        color: [255, 255, 255],
        discription: '',
        events: [],
        goWest: false,
        goNord: false,
        goOst: false,
        goSud: false,
       },
    {   
        id: 1.1,
        name: 'Auf einer Wiese',
        icon: 'grass',
        color: [135, 167, 135],
        discription: 'Ein offenes Feld, dessen Grashalme im unbeständigen Licht flackern. Man fragt sich, welche Geheimnisse im Boden verborgen liegen.',
        events: [],
        goWest: true,
        goNord: true,
        goOst: true,
        goSud: true,
       },
    {   
        id: 1.2,
        name: 'Im Wald',
        icon: 'tree',
        color: [71, 124, 108],
        discription: 'Ein dunkler Wald, wo das Knarren der Tannen wie ein stilles Flüstern klingt. Man hat das Gefühl, beobachtet zu werden.',
        events: [],
        goWest: true,
        goNord: true,
        goOst: true,
        goSud: true,
       },
    {
        id: 1.3,
        name: 'Eine Blumenwiese',
        icon: 'flower',
        color: [135, 167, 135],
        discription: 'Ein verwunschenes Feld, in dem seltsame Blumen mit unergründlichen Farben blühen. Jeder Duft scheint eine versteckte Botschaft zu tragen.',
        events: [],
        goWest: true,
        goNord: true,
        goOst: true,
        goSud: true,
       },
    {
        id: 1.4,
        name: 'Am Fluss',
        icon: 'water',
        color: [93, 125, 172],
        discription: 'Ein unruhiger Strom, dessen Wellenmuster nicht zu entschlüsseln sind. Was unter der Oberfläche lauert, bleibt ein Rätsel.',
        events: [],
        goWest: false,
        goNord: false,
        goOst: false,
        goSud: false,
       },
    {
        id: 1.5,
        name: 'Etwas Besonderes',
        icon: 'star',
        color: [212, 186, 97],
        discription: 'Ein Gebiet, das von seltsamen Lichtern durchströmt ist. Jedes Geräusch könnte das Echo einer vergessenen Welt sein.',
        events: [],
        goWest: true,
        goNord: true,
        goOst: true,
        goSud: true,
       },
     {
        id: 1.6,
        name: 'Eine Brücke am Fluss',
        icon: 'brigeH',
        color: [93, 125, 172],
        discription: 'Ein alter Steg, der zwei Ufer wie zwei getrennte Welten miteinander verbindet. Der Holzbelag knarrt unter jedem Schritt.',
        events: [],
        goWest: true,
        goNord: false,
        goOst: true,
        goSud: false,
       },
    ]

 