export interface TileEvent {
    id: number;
    name: string;
    type: string;
    icon: string;
    action: Array<{ button: string, actionID: number }>;
}

export const EmptyTileEvent: TileEvent = {
    id: 0,
    name: 'Nothing',
    type: 'DIALOG',
    icon: 'people',
    action: [],
}

export const tileEvent: TileEvent[] = [
    {
        id: 0,
        name: 'Nothing',
        type: 'DIALOG',
        icon: 'people',
        action: [],
    },
    {
        id: 1,
        name: 'Bauer',
        type: 'DIALOG',
        icon: 'm02',
        action: [{ button: 'anschauen', actionID: 1 }, { button: 'ansprechen', actionID: 2 }],
    },
    {
        id: 2,
        name: 'Bäuerin',
        type: 'DIALOG',
        icon: 'w02',
        action: [{ button: 'anschauen', actionID: 4 }, { button: 'ansprechen', actionID: 5 }],
    },
    {
        id: 3,
        name: 'Ina',
        type: 'DIALOG',
        icon: 'chara',
        action: [],
    }
]