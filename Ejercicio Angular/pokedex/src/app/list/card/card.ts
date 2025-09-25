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

  bgColor: string = "#fff";
  setBackgroundColor(type: string|null){
    switch (type) {
      case "Bug":
        this.bgColor = "#13941eff";
        break;
      case "Dark":
        this.bgColor = "#1b1c1bff";
        break;
      case "Dragon":
        this.bgColor = "#148095ff";
        break;
      case "Electric":
        this.bgColor = "#eded1a";
        break;
      case "Fairy":
        this.bgColor = "#c9187fff";
        break;
      case "Fighting":
        this.bgColor = "#eda01a";
        break;
      case "Fire":
        this.bgColor = "#ed1a1a";
        break;
      case "Flying":
        this.bgColor = "#55818fff";
        break;
      case "Ghost":
        this.bgColor = "#363d8dff";
        break;
      case "Grass":
        this.bgColor = "#44ed1a";
        break;
      case "Ground":
        this.bgColor = "#786210ff";
        break;
      case "Ice":
        this.bgColor = "#1ad8ed";
        break;
      case "Normal":
        this.bgColor = "#98417cff";
        break;
      case "Poison":
        this.bgColor = "#751191ff";
        break;
      case "Psychic":
        this.bgColor = "#ed1ab5";
        break;
      case "Rock":
        this.bgColor = "#603d0bff";
        break;
      case "Steel":
        this.bgColor = "#72daa5ff";
        break;
      case "Water":
        this.bgColor = "#1a92ed";
        break;
      default:
        this.bgColor = "#fff"
        break;

    }
    return this.bgColor;
  }
  
}

