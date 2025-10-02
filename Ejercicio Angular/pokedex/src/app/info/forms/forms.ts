import { Component, inject, input } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { TitleCasePipe } from '@angular/common';
import { PokeEvolution } from '../../core/models/poke-evolution.model';

@Component({
  selector: 'app-forms',
  imports: [TitleCasePipe],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms {
  readonly evo_url = input<string>('');
  readonly name = input<string>('');
  readonly #pokeService = inject(PokeService);

  protected readonly pokeEvolution_Chain = this.#pokeService.getPokemonEvolutionChain(this.evo_url);

  pokemonPointer = this.pokeEvolution_Chain.value()?.chain;
  //pokeEvoArray:PokeEvolution["chain"] = [];
  constructor(){
    this.getPokemonEvolution();
  }
  getPokemonEvolution(){
    while(this.pokemonPointer?.evolves_to.at(0) != undefined){
      this.pokemonPointer = this.pokemonPointer?.evolves_to.at(0);
      //this.pokeEvoArray.push(this.pokemonPointer);

    }
  }
}
