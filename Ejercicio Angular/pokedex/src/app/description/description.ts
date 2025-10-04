import { Component, inject, input } from '@angular/core';
import { PokeService } from '../core/services/poke.service';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.html',
  styleUrl: './description.scss'
})
export class Description {
  readonly name = input<string>('');
  readonly #pokeService = inject(PokeService);
  protected readonly pokeSpeciesResource = this.#pokeService.getPokemonSpecies(this.name);
}
