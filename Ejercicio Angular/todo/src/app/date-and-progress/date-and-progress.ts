import { Component, input } from '@angular/core';
import { List } from '../core/models/list-model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-date-and-progress',
  imports: [DecimalPipe],
  templateUrl: './date-and-progress.html',
  styleUrl: './date-and-progress.scss'
})
export class DateAndProgress {
  list = input.required<List>();

}
