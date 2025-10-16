import { Component } from '@angular/core';
import { DateComponent } from '../date-component/date-component';
import { ProgressComponent } from '../progress-component/progress-component';
import { Activity } from '../activity/activity';
import { DateAndProgress } from '../date-and-progress/date-and-progress';

@Component({
  selector: 'app-list',
  imports: [DateComponent, ProgressComponent, Activity, DateAndProgress],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {

}
