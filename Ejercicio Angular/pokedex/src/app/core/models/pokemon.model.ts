export interface Pokemon {
    id: number;
    types: {
        type: { name: string };
    }[];
    sprites: { front_default: string };
    forms: {
        name: string,
        url: string
    }[];
}