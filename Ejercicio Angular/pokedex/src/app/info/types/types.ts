import { Component, inject, input, output } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { Image } from '../../image/image';
import { Description } from '../../description/description';
import { TitleCasePipe } from '@angular/common';
import { Pokemon } from '../../core/models/pokemon.model';

@Component({
  selector: 'app-types',
  imports: [Image, TitleCasePipe],
  templateUrl: './types.html',
  styleUrl: './types.scss'
})
export class Types {

  readonly pokeResource = input.required<Pokemon|undefined>();
  
}
