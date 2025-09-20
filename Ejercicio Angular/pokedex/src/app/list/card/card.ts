import { Component, input } from '@angular/core';
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
readonly pokeResult = input.required<PokeResult>();
}
