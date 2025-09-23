import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { PokeList } from '../models/poke-list.model';
import { Pokemon } from '../models/pokemon.model';
import { PokeSpecies } from '../models/poke-species.model';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  readonly #pokeUrl = 'https://pokeapi.co/api/v2';

  getPokeList(): HttpResourceRef<PokeList | undefined> {
    return httpResource<PokeList>(() => `${this.#pokeUrl}/pokemon?limit=151`);
  }

  getPokemon(name: Signal<string>): HttpResourceRef<Pokemon | undefined> {
    return httpResource<Pokemon>(() => `${this.#pokeUrl}/pokemon/${name()}`);
  }

  getPokemonSpecies(name: Signal<string>): HttpResourceRef<PokeSpecies | undefined> {
    return httpResource<PokeSpecies>(() => `${this.#pokeUrl}/pokemon-species/${name()}`);
  }
}
