import { NgClass } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { Category } from '../category/category';
import { CategoryModel } from '../core/models/category-model';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../core/services/todo-service';
import { ActivityModel } from '../core/models/activity-model';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, Category, FormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  readonly todo_service = inject(TodoService);

  category_list = this.todo_service.getCategoryList('todo-categories');

  create_category: boolean = false;
  
  category_obj: CategoryModel = {} as CategoryModel;

  activities = output<ActivityModel[]>();

  getActivities(){
    console.log("Check Activities");
    this.activities.emit(this.todo_service.getActivities());
    //this.todo_service.getActivities();
  }

  getImportantActivities(){
    console.log("Check Important Activities");
    this.activities.emit(this.todo_service.getImportantActivities());
    //this.todo_service.getImportantActivities();
  }

  createCategory(){
    if(this.create_category == false){
      this.create_category = true;
    }else{
      this.create_category = false;
    }
  }

  saveCategory(){
    
    if(this.category_obj.name != undefined && this.category_obj.color != undefined){
      this.category_obj.id = this.todo_service.category_list.length;

      this.todo_service.createCategory(this.category_obj);
      this.todo_service.setCategoryList('todo-categories');

      this.category_list = this.todo_service.getCategoryList('todo-categories');
      this.create_category = false;

      this.category_obj = {} as CategoryModel;
    }
    
  }

}
