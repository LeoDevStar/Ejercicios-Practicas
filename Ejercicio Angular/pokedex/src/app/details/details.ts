import { Component, input } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss'
})
export default class Details {
  readonly name = input<string>('');
}
 