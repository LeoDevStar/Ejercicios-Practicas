import { Component, inject, input } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { TitleCasePipe } from '@angular/common';
import { Image } from '../../image/image';

@Component({
  selector: 'app-forms',
  imports: [TitleCasePipe, Image],
  templateUrl: './forms.html',
  styleUrl: './forms.scss'
})
export class Forms {
  readonly name = input<string>('');
  readonly #pokeService = inject(PokeService);

  protected readonly pokeResource = this.#pokeService.getPokemon(this.name);
}
