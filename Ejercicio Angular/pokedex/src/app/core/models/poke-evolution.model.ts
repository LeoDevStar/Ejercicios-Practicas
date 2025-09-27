export interface pokeEvolution{
    id: number;
    chain: {
        evolves_to: {
            species: {
                name: string;
                url: string;
            }
        }[];
    };
}