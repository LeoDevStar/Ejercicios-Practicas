export interface PokeEvolution{
    id: number;
    chain: {
        species: {
            name: string;
            url: string;
        },
        evolves_to: PokeEvolution["chain"][];
    };
}