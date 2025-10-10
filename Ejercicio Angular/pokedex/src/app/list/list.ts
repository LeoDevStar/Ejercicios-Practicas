import { Component, inject } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { Card } from './card/card';
import { SearchBar } from '../search-bar/search-bar';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [Card, SearchBar, TitleCasePipe],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
  readonly #pokeService = inject(PokeService);
  protected readonly pokeListResource = this.#pokeService.getPokeList();

  pokemon_search_value: string = '';
  getPokemonSearch(value: string){
    console.log("List received: " + value);
    this.pokemon_search_value = value;
  }
}
