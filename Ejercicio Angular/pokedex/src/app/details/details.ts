import { Component, inject, input } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Forms } from "../info/forms/forms";

@Component({
  selector: 'app-details',
  imports: [TitleCasePipe, NgOptimizedImage, RouterLink, Forms],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export default class Details {
  readonly name = input<string>('');
  
  readonly #pokeService = inject(PokeService);

  protected readonly pokeResource = this.#pokeService.getPokemon(this.name);
}
 