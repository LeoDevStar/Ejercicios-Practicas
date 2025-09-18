import { Component, input } from '@angular/core';
import { PokeResult } from '../../core/models/poke-result.model';
import { TitleCasePipe } from '@angular/common';
import { PokeImgPipe } from './poke-img-pipe';

@Component({
  selector: 'app-card',
  imports: [TitleCasePipe, PokeImgPipe],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
readonly pokeResult = input.required<PokeResult>();
}
