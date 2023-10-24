export interface TileEvent{
    id: number;
    name: string;
    type: string;
    icon: string;
    action: string[];
}

export const EmptyTileEvent: TileEvent = {
    id: 0,
    name: 'Nothing',
    type: 'DIALOG',
    icon: 'people',
    action: ['VIEW','DIALOG'],
}

export const tileEvent = [
    {
        id: 0,
        name: 'Nothing',
        type: 'DIALOG',
        icon: 'people',
        action: ['VIEW','DIALOG'],
    },
    {
        id: 1,
        name: 'Bauer',
        type: 'DIALOG',
        icon: 'people',
        action: ['VIEW','DIALOG'],
    }, 
    {
        id: 2,
        name: 'Bäuerin',
        type: 'DIALOG',
        icon: 'people',
        action: ['VIEW','DIALOG'],
    }
]