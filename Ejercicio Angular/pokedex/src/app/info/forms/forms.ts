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

  /*checkEvolutionChain(){
    return this.pokeEvolution_Chain.value()?.chain.evolves_to.at(0)?.evolves_to.at(0);
  }*/
  /*evolution_chain:string|undefined[] = new Array();
  checkEvolutionChain(evolution_chain_obj:PokeEvolution){
    if(evolution_chain_obj.chain.evolves_to.length >= 1){
      //this.evolution_chain.push(evolution_chain_obj.chain.evolves_to.at(0)?.species.name));
      //evolution_chain_obj.chain.evolves_to.at(0)?.species.name
    }
    return evolution_chain_obj.chain.evolves_to.at(0)?.species.name;
  }*/
}
