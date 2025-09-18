import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { PokeList } from '../models/poke-list.model';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  readonly #pokeUrl = 'https://pokeapi.co/api/v2';

  getPokeList(): HttpResourceRef<PokeList | undefined> {
    return httpResource<PokeList>(() => `${this.#pokeUrl}/pokemon?limit=151`);
  }

  getPokemon(name: Signal<string>){
    return httpResource(() => `${this.#pokeUrl}/pokemon/${name()}`);
  }
}
