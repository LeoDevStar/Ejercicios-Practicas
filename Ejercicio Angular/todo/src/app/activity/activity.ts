import { NgClass } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { ActivityModel } from '../core/models/activity-model';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../core/services/todo-service';
import { CategoryModel } from '../core/models/category-model';

@Component({
  selector: 'app-activity',
  imports: [NgClass, FormsModule],
  templateUrl: './activity.html',
  styleUrl: './activity.scss'
})
export class Activity {
  
  readonly activity = input.required<ActivityModel>();

  activity_selected = output<ActivityModel>();
  check_value: boolean =  false;
  activity_checked = output<boolean>();

  activity_category: CategoryModel = {} as CategoryModel;

  readonly todo_service = inject(TodoService);

  activity_show(){
    this.activity_selected.emit(this.activity());
  }

  checkStyle(category_name: string){
    this.activity_category = this.todo_service.getCategory(category_name)?? {} as CategoryModel;
    return this.activity_category.color;
  }


  activityCheck(){
    if(this.check_value == false){
      this.activity_checked.emit(true);
    }else{
      this.activity_checked.emit(false);
    }
  }
}
