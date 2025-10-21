import { DatePipe, NgClass } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { TodoService } from '../core/services/todo-service';
import { ActivityModel } from '../core/models/activity-model';

@Component({
  selector: 'app-activity-details',
  imports: [NgClass, DatePipe],
  templateUrl: './activity-details.html',
  styleUrl: './activity-details.scss'
})
export class ActivityDetails {
  showDetails = input.required<boolean>();
  load_activity = input<ActivityModel>({} as ActivityModel);
  todo_service = inject(TodoService);
  //activity = input<Activity>();
  activity:ActivityModel ={
    id: 0,
    name: '',
    description: '',
    list: '',
    date: ''
  };
  
  update_activity = output<boolean>();
  newActivity(name_received: string, description_received:string, list_received: string, date_received: string){
    this.activity = {
      id: this.todo_service.activity_list.activities.length,
      name: name_received,
      description: description_received,
      list: list_received,
      date: date_received
    };

    this.todo_service.createActivity(this.activity);
    this.todo_service.setList("Test List");
    
    this.update_activity.emit(true);
  }


}
