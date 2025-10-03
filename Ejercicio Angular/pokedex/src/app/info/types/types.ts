import { Component, inject, input } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { Image } from '../../image/image';

@Component({
  selector: 'app-types',
  imports: [Image],
  templateUrl: './types.html',
  styleUrl: './types.scss'
})
export class Types {
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
