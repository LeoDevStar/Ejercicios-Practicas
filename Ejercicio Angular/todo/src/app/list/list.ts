import { Component } from '@angular/core';
import { DateComponent } from '../date-component/date-component';
import { ProgressComponent } from '../progress-component/progress-component';

@Component({
  selector: 'app-list',
  imports: [DateComponent, ProgressComponent],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {

}
