import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {

  searchPokemon(){
    let name = document.getElementById("searchInput")?.nodeValue;
    console.log(name);
  }

}
