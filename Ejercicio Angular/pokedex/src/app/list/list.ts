import { Component, inject } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { Card } from './card/card';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'app-list',
  imports: [Card, SearchBar],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
  readonly #pokeService = inject(PokeService);
  protected readonly pokeListResource = this.#pokeService.getPokeList();
}
