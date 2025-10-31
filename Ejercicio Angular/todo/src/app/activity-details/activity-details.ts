import { DatePipe, NgClass } from '@angular/common';
import { Component, effect, inject, input, output } from '@angular/core';
import { TodoService } from '../core/services/todo-service';
import { ActivityModel } from '../core/models/activity-model';
import { FormsModule } from '@angular/forms';
import { CategoryModel } from '../core/models/category-model';

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

  list_categories = this.todo_service.getCategoryList('todo-categories');

  activity_category: CategoryModel = {} as CategoryModel;

  activity: ActivityModel = {} as ActivityModel;

  constructor(){
    effect(()=>{
      this.activity={
        id: this.todo_service.activity_list.activities.length,
        name: this.load_activity().name?? 'New Activity',
        description: this.load_activity().description?? 'Add Description',
        list: this.load_activity().list?? 'Work',
        date: this.load_activity().date?? '2025-10-30',
        important: this.load_activity().important?? "False",
        checked: this.load_activity().checked?? "False"
      };
      this.list_categories = this.todo_service.getCategoryList('todo-categories');
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

  checkStyle(category_name: string){
    this.activity_category = this.todo_service.getCategory(category_name)?? {} as CategoryModel;
    return this.activity_category.color;
  }

  hideDetails(){
    this.close_activity.emit(true);
  }

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
    
    this.todo_service.setList('todo-list');
    
    this.update_activity.emit(true);
  }

  deleteActivity(){
    //console.log("Delete Activity");
    this.todo_service.deleteActivity(this.load_activity().id);
    this.todo_service.setList('todo-list');
    this.hideDetails();
  }


}
