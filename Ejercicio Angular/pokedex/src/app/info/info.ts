import { Component, inject, input } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-info',
  imports: [TitleCasePipe],
  templateUrl: './info.html',
  styleUrl: './info.scss'
})
export class Info {
  readonly #pokeService = inject(PokeService);
  readonly name = input<string>('');

  protected readonly pokeSpecies = this.#pokeService.getPokemonSpecies(this.name);
}
