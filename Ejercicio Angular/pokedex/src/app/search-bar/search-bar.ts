import { Component, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {

  pokemon_name: string = "";

  pokemon_search = output<string>();

  searchPokemon(value: string){
    //let name = document.getElementById("searchInput");
    //this.pokemon_name = value;
    //console.log("Search Pokemon: " + this.pokemon_name);
    this.pokemon_search.emit(value);
  }

}
