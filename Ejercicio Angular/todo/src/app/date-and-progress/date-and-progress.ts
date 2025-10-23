import { Component, input } from '@angular/core';
import { List } from '../core/models/list-model';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-date-and-progress',
  imports: [DecimalPipe, DatePipe],
  templateUrl: './date-and-progress.html',
  styleUrl: './date-and-progress.scss'
})
export class DateAndProgress {
  list = input.required<List>();
  currentDate = new Date();

}
