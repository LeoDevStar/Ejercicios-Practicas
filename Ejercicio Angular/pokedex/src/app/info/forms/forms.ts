import { Component, inject, input, output } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { TitleCasePipe } from '@angular/common';
import { Image } from '../../image/image';
import { Description } from '../../description/description';

@Component({
  selector: 'app-forms',
  imports: [Description, Image],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms {
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
