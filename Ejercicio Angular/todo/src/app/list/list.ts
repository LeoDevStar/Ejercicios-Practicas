import { Component } from '@angular/core';
import { DateComponent } from '../date-component/date-component';

@Component({
  selector: 'app-list',
  imports: [DateComponent],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {

}
