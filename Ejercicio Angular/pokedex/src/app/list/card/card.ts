import { Component, input, inject } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { PokeResult } from '../../core/models/poke-result.model';
import { NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { PokeImgPipe } from './poke-img-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [TitleCasePipe, PokeImgPipe, NgOptimizedImage, RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {

  readonly #pokeService = inject(PokeService);
  readonly pokeResult = input.required<PokeResult>();
  readonly name = input.required<string>();

  protected readonly pokeResource = this.#pokeService.getPokemon(this.name);
}
