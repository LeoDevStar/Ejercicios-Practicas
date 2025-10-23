import { Component, inject } from '@angular/core';
import { Activity } from '../activity/activity';
import { DateAndProgress } from '../date-and-progress/date-and-progress';
import { ActivityDetails } from '../activity-details/activity-details';
import { TodoService } from '../core/services/todo-service';
import { ActivityModel } from '../core/models/activity-model';

@Component({
  selector: 'app-list',
  imports: [Activity, DateAndProgress, ActivityDetails],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
  readonly todo_service = inject(TodoService);
  
  list = this.todo_service.getList(0);

  show: boolean = false;

  activity: ActivityModel = {} as ActivityModel;
  loadActivity(activity_received: ActivityModel){
    
    this.activity = activity_received;

  }
  showActivityDetails(){
    if(this.show==false){
      this.show = true;
    }else{
      this.show = false;
    }
  }

  updateList(value: boolean){
    if(value){
      this.list = this.todo_service.getList(0);
    }
  }


}
