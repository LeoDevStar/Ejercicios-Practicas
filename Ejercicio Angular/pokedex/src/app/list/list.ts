import { Component, inject } from '@angular/core';
import { PokeService } from '../core/services/poke.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
  readonly #pokeService = inject(PokeService);
  protected readonly pokeListResource = this.#pokeService.getPokeList();
}
