import { Component, inject } from '@angular/core';
import { Activity } from '../activity/activity';
import { DateAndProgress } from '../date-and-progress/date-and-progress';
import { ActivityDetails } from '../activity-details/activity-details';
import { TodoService } from '../core/services/todo-service';

@Component({
  selector: 'app-list',
  imports: [Activity, DateAndProgress, ActivityDetails],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
  readonly todo_service = inject(TodoService);

  //activity = this.todo_service.getActivity("Test activity 3");
  list = this.todo_service.activity_list;
  
  //updatedActivity: boolean = false;

  show: boolean = false;
  showActivityDetails(){
    if(this.show==false){
      this.show = true;
    }else{
      this.show = false;
    }
  }

  updateList(value: boolean){
    if(value){
      this.list = this.todo_service.activity_list;
    }
    // if(value){
    //   this.activity = this.todo_service.getActivity("Test activity 3");
    // }
  }


}
