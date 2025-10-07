import { Component, inject, input, output } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { TitleCasePipe } from '@angular/common';
import { Forms } from "./forms/forms";
import { InfoDetails } from './info-details/info-details';
import { Types } from './types/types';

@Component({
  selector: 'app-info',
  imports: [TitleCasePipe, Forms, InfoDetails, Types],
  templateUrl: './info.html',
  styleUrl: './info.scss'
})
export class Info {
  readonly #pokeService = inject(PokeService);
  readonly name = input<string>('');

  protected readonly pokeSpecies = this.#pokeService.getPokemonSpecies(this.name);

  content = "Forms";
  switchedContent = output<Boolean>();
  switchContent(cont: string){
    this.content = cont;
    this.switchedContent.emit(true);
  }

  info_pokemon_name = output<string>();
  getPokeName(name: string){
    this.info_pokemon_name.emit(name);
  }
}
