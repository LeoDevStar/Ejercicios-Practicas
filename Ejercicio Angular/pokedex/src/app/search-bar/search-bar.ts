import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {

  pokemon_name: string = "";

  searchPokemon(value: string){
    //let name = document.getElementById("searchInput");
    this.pokemon_name = value;
    console.log("Search Pokemon: " + this.pokemon_name);
  }

}
