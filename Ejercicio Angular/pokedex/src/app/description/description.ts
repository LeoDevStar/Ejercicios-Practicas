import { Component, inject, input } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-description',
  imports: [TitleCasePipe],
  templateUrl: './description.html',
  styleUrl: './description.scss'
})
export class Description {
  readonly name = input<string>('');
  readonly #pokeService = inject(PokeService);
  protected readonly pokeSpeciesResource = this.#pokeService.getPokemonSpecies(this.name);
}
