import { Component, inject, input } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { TitleCasePipe } from '@angular/common';
import { Image } from '../../image/image';

@Component({
  selector: 'app-forms',
  imports: [TitleCasePipe, Image],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms {
  readonly evo_url = input<string>('');
  readonly name = input<string>('');
  readonly #pokeService = inject(PokeService);

  protected readonly pokeEvolution_Chain = this.#pokeService.getPokemonEvolutionChain(this.evo_url);

  pokemonPointer = this.pokeEvolution_Chain.value()?.chain;
  
  getPokemonEvolution(){
    while(this.pokemonPointer?.evolves_to.at(0) != undefined){
      this.pokemonPointer = this.pokemonPointer?.evolves_to.at(0);
    }
  }
}
