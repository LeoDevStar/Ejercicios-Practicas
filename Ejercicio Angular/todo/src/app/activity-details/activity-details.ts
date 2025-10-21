import { DatePipe, NgClass } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { TodoService } from '../core/services/todo-service';
import { ActivityModel } from '../core/models/activity-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activity-details',
  imports: [NgClass, DatePipe, FormsModule],
  templateUrl: './activity-details.html',
  styleUrl: './activity-details.scss'
})
export class ActivityDetails {
  showDetails = input.required<boolean>();
  load_activity = input<ActivityModel>({} as ActivityModel);
  todo_service = inject(TodoService);
  //activity = input<Activity>();
  
  activity:ActivityModel ={
    id: this.todo_service.activity_list.activities.length,
    name: this.load_activity().name?? 'Test Name',
    description: this.load_activity().description?? 'Test Description',
    list: this.load_activity().list?? 'Work',
    date: this.load_activity().date?? '2025-10-30'
  };
  
  update_activity = output<boolean>();

  setActivity(){

    if(this.todo_service.getActivity(this.load_activity().id) != undefined){
      this.activity.id = this.load_activity().id;
      // console.log("Activity Name: " + this.activity.name);
      // console.log("Activity Description: " + this.activity.description);
      // console.log("Activity List: " + this.activity.list);
      // console.log("Activity Date: " + this.activity.date);
      
      this.todo_service.updateActivity(this.activity.id, this.activity);
    }else{
      this.activity.id = this.todo_service.activity_list.activities.length;
      this.todo_service.createActivity(this.activity);
    }
    this.activity = {} as ActivityModel;
    
    this.todo_service.setList(0);
    
    this.update_activity.emit(true);
  }


}
