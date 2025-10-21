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
    name: '',
    description: '',
    list: '',
    date: ''
  };
  
  update_activity = output<boolean>();
  newActivity(){
    // this.activity = {
    //   id: this.todo_service.activity_list.activities.length,
    //   name: name_received,
    //   description: description_received,
    //   list: list_received,
    //   date: date_received
    // };

    this.todo_service.createActivity(this.activity);
    this.todo_service.setList(0);
    
    this.update_activity.emit(true);
  }


}
