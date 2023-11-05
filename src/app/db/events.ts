export interface TileEvent {
    id: number;
    name: string;
    type: string;
    icon: string;
    actions: Array<{ button: string, actionID: number }>;
}

export const EmptyTileEvent: TileEvent = {
    id: 0,
    name: 'Nothing',
    type: 'DIALOG',
    icon: 'people',
    actions: [],
}

export const tileEvent: TileEvent[] = [
    {
        id: 0,
        name: 'Nothing',
        type: 'Nothing',
        icon: 'nothing',
        actions: [],
    },
    {
        id: 1,
        name: 'Bauer',
        type: 'DIALOG',
        icon: 'm02',
        actions: [{ button: 'anschauen', actionID: 1 }, { button: 'ansprechen', actionID: 2 }],
    },
    {
        id: 2,
        name: 'Bäuerin',
        type: 'DIALOG',
        icon: 'w02',
        actions: [{ button: 'anschauen', actionID: 4 }, { button: 'ansprechen', actionID: 5 }],
    },
    {
        id: 3,
        name: 'Ina',
        type: 'DIALOG',
        icon: 'chara',
        actions: [{ button: 'anschauen', actionID: 6 }],
    },
]