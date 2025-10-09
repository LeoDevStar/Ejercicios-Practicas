import { Component, inject, input } from '@angular/core';
import { PokeService } from '../../core/services/poke.service';
import { NgClass, TitleCasePipe } from '@angular/common';
import { Pokemon } from '../../core/models/pokemon.model';

@Component({
  selector: 'app-stats',
  imports: [TitleCasePipe, NgClass],
  templateUrl: './stats.html',
  styleUrl: './stats.scss'
})
export class Stats {
  
  readonly pokeResource = input.required<Pokemon|undefined>();

  applyStyle(stat_name: string){
    let class_name = '';
    switch (stat_name) {
      case "Hp":
        class_name = 'hp-stat';
        break;
      case "Attack":
        class_name = 'attack-stat';
        break;
      case "Defense":
        class_name = 'defense-stat';
        break;
      case "Special-attack":
        class_name = 'special-attack-stat';
        break;
      case "Special-defense":
        class_name = 'special-defense-stat';
        break;
      case "Speed":
        class_name = 'speed-stat';
        break;
      default:
        class_name = 'default-stat';
        break;
    }
    return class_name;
  }
}
