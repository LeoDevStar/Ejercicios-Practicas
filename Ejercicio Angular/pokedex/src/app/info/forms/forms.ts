import { Component, inject, input } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';

@Component({
  selector: 'app-forms',
  imports: [],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms {
  readonly #pokeService = inject(PokeService);
  readonly name = input.required<string>();

  protected readonly pokeSpecies = this.#pokeService.getPokemonSpecies(this.name);
}
