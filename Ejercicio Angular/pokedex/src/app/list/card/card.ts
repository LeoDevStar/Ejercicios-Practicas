import { Component, input } from '@angular/core';
import { PokeResult } from '../../core/models/poke-result.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
readonly pokeResult = input.required<PokeResult>();
}
