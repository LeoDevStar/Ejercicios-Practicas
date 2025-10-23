import { DatePipe, NgClass } from '@angular/common';
import { Component, effect, inject, input, output } from '@angular/core';
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
  activity: ActivityModel = {} as ActivityModel;

  constructor(){
    effect(()=>{
      this.activity={
      id: this.todo_service.activity_list.activities.length,
      name: this.load_activity().name?? 'New Activity',
      description: this.load_activity().description?? 'Add Description',
      list: this.load_activity().list?? 'Work',
      date: this.load_activity().date?? '2025-10-30'
  };
    })
  }
  
  
  
  update_activity = output<boolean>();
  close_activity = output<boolean>();

  // _allowDay: boolean;
  // get allowDay(): boolean {
  //     return this._allowDay;
  // }
  // @Input() set allowDay(value: boolean) {
  //     this._allowDay = value;;
  // }

  setActivity(){

    //console.log(this.activity);
    // return ;
    if(this.todo_service.getActivity(this.load_activity().id) != undefined){

      this.activity.id = this.load_activity().id;
      this.todo_service.updateActivity(this.activity.id, this.activity);

    }else{

      this.activity.id = this.todo_service.activity_list.activities.length;
      this.todo_service.createActivity(this.activity);

    }
    //this.activity = {} as ActivityModel;
    
    this.todo_service.setList('todo-list');
    
    this.update_activity.emit(true);
  }

  hideDetails(){
    //console.log("Close Details");
    this.close_activity.emit(true);
  }


}
