import { Component, inject, input } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-info-details',
  imports: [TitleCasePipe],
  templateUrl: './info-details.html',
  styleUrl: './info-details.scss'
})
export class InfoDetails {

  readonly #pokeService = inject(PokeService);

  readonly name = input.required<string>();

  protected readonly pokeResource = this.#pokeService.getPokemon(this.name);

}
