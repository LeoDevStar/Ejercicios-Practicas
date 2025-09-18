import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokeImg'
})
export class PokeImgPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
