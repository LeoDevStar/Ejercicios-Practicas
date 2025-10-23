import { Component, input } from '@angular/core';
import { List } from '../core/models/list-model';

@Component({
  selector: 'app-date-and-progress',
  imports: [],
  templateUrl: './date-and-progress.html',
  styleUrl: './date-and-progress.scss'
})
export class DateAndProgress {
  list = input.required<List>();

}
