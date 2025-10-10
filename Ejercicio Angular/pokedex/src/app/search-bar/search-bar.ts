import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [NgClass],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {

  pokemon_name: string = "";

  pokemon_search = output<string>();

  css_class = input<string>('poke-search-center');

  searchPokemon(value: string){
    
    this.pokemon_search.emit(value);
  }

}
