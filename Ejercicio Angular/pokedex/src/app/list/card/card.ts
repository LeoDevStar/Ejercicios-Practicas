import { Component, input } from '@angular/core';
import { PokeResult } from '../../core/models/poke-result.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [TitleCasePipe],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
readonly pokeResult = input.required<PokeResult>();
}
