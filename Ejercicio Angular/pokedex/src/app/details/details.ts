import { Component, inject, input } from '@angular/core';
import { PokeService } from '../core/services/poke.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export default class Details {
  readonly name = input<string>('');
  
  readonly #pokeService = inject(PokeService);

  protected readonly pokeResource = this.#pokeService.getPokemon(this.name);
}
 