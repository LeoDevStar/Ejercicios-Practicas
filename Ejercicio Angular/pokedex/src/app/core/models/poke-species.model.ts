export interface PokeSpecies{
    name: string;
    flavor_text_entries: {
        flavor_text: string;
    }[];
    evolution_chain: {
        url: string;
    };
}