import { Component, inject, input } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { NgClass, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Info } from "../info/info";

@Component({
  selector: 'app-details',
  imports: [TitleCasePipe, NgOptimizedImage, RouterLink, Info, NgClass],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export default class Details {
  readonly name = input<string>('');
  
  readonly #pokeService = inject(PokeService);

  protected readonly pokeResource = this.#pokeService.getPokemon(this.name);
  protected readonly pokeSpeciesResource = this.#pokeService.getPokemonSpecies(this.name);

  type_css_class: string = '';
  typeStyles(type: string|null){
    switch (type) {
      case "Bug":
        this.type_css_class = "poke-type-bug";
        break;
      case "Dark":
        this.type_css_class = "poke-type-dark";
        break;
      case "Dragon":
        this.type_css_class = "poke-type-dragon";
        break;
      case "Electric":
        this.type_css_class = "poke-type-electric";
        break;
      case "Fairy":
        this.type_css_class = "poke-type-fairy";
        break;
      case "Fighting":
        this.type_css_class = "poke-type-fighting";
        break;
      case "Fire":
        this.type_css_class = "poke-type-fire";
        break;
      case "Flying":
        this.type_css_class = "poke-type-flying";
        break;
      case "Ghost":
        this.type_css_class = "poke-type-ghost";
        break;
      case "Grass":
        this.type_css_class = "poke-type-grass";
        break;
      case "Ground":
        this.type_css_class = "poke-type-ground";
        break;
      case "Ice":
        this.type_css_class = "poke-type-ice";
        break;
      case "Normal":
        this.type_css_class = "poke-type-normal";
        break;
      case "Poison":
        this.type_css_class = "poke-type-poison";
        break;
      case "Psychic":
        this.type_css_class = "poke-type-psychic";
        break;
      case "Rock":
        this.type_css_class = "poke-type-rock";
        break;
      case "Steel":
        this.type_css_class = "poke-type-steel";
        break;
      case "Water":
        this.type_css_class = "poke-type-water";
        break;
      default:
        this.type_css_class = "poke-type-default"
        break;

    }
    return this.type_css_class;
  }
}
 