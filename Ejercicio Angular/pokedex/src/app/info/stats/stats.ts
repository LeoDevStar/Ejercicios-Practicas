import { Component, inject, input } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-stats',
  imports: [TitleCasePipe],
  templateUrl: './stats.html',
  styleUrl: './stats.scss'
})
export class Stats {
  readonly #pokeService = inject(PokeService);
  readonly name = input<string>('');

  protected readonly pokeResource = this.#pokeService.getPokemon(this.name);
}
