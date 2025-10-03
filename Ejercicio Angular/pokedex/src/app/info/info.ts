import { Component, inject, input } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { TitleCasePipe } from '@angular/common';
import { Forms } from "./forms/forms";
import { InfoDetails } from './info-details/info-details';

@Component({
  selector: 'app-info',
  imports: [TitleCasePipe, Forms, InfoDetails],
  templateUrl: './info.html',
  styleUrl: './info.scss'
})
export class Info {
  readonly #pokeService = inject(PokeService);
  readonly name = input<string>('');

  protected readonly pokeSpecies = this.#pokeService.getPokemonSpecies(this.name);

  content = "Forms";

  switchContent(cont: string){
    this.content = cont;
  }
}
