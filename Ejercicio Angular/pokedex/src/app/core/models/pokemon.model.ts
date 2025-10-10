export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: {
        ability:{
            name: string;
            url: string;
        }
    }[];
    forms: {
        name: string,
        url: string
    }[];
    types: {
        type: { name: string };
    }[];
    sprites: { front_default: string };
    stats:{
        base_stat: number;
        effort: number;
        stat: {
            name: string;
            url: string;
        }
    }[];
    
}