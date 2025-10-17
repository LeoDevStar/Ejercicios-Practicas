import { Component, output } from '@angular/core';
import { Activity } from '../activity/activity';
import { DateAndProgress } from '../date-and-progress/date-and-progress';
import { ActivityDetails } from '../activity-details/activity-details';

@Component({
  selector: 'app-list',
  imports: [Activity, DateAndProgress, ActivityDetails],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
  
  show: boolean = false;
  showActivityDetails(){
    if(this.show==false){
      this.show = true;
    }else{
      this.show = false;
    }
  }



}
