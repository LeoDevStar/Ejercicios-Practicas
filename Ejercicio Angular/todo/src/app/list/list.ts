import { Component } from '@angular/core';
import { DateComponent } from '../date-component/date-component';
import { ProgressComponent } from '../progress-component/progress-component';
import { Activity } from '../activity/activity';

@Component({
  selector: 'app-list',
  imports: [DateComponent, ProgressComponent, Activity],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {

}
