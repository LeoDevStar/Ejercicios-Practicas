import { Component } from '@angular/core';
import { Activity } from '../activity/activity';
import { DateAndProgress } from '../date-and-progress/date-and-progress';

@Component({
  selector: 'app-list',
  imports: [Activity, DateAndProgress],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {

}
