import { Component, inject, input, output } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { Image } from '../../image/image';
import { Description } from '../../description/description';

@Component({
  selector: 'app-types',
  imports: [Image, Description],
  templateUrl: './types.html',
  styleUrl: './types.scss'
})
export class Types {
  readonly evo_url = input<string>('');
  readonly #pokeService = inject(PokeService);
  protected readonly pokeEvolution_Chain = this.#pokeService.getPokemonEvolutionChain(this.evo_url);

  description = 0;
  poke_name = output<string>();

  switchDescription(desc: number){
    this.description = desc;
  }

  switchPokeName(name: string){
    this.poke_name.emit(name);
  }
  
}
