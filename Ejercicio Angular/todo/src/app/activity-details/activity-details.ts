import { DatePipe, NgClass } from '@angular/common';
import { Component, inject, input } from '@angular/core';
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
  todo_service = inject(TodoService);
  //activity = input<Activity>();
  activity:ActivityModel ={
    name: '',
    description: '',
    list: '',
    date: ''
  };
  
  newActivity(name_received: string, description_received:string, list_received: string, date_received: string){
    this.activity = {
      name: name_received,
      description: description_received,
      list: list_received,
      date: date_received
    };
    this.todo_service.createActivity(this.activity);
  }


}
