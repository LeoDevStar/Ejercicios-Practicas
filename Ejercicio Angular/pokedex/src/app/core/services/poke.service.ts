import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  readonly #pokeUrl = 'https://pokeapi.co/api/v2';

  getPokeList() {
    return httpResource(() => `${this.#pokeUrl}/pokemon?limit=151`);
  }
}
