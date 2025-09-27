export interface PokeEvolution{
    id: number;
    chain: {
        evolves_to: {
            species: {
                name: string;
                url: string;
            },
            evolves_to: [];
        }[];
    };
}