import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { List } from './list/list';
import { ActivityDetails } from './activity-details/activity-details';
import { ActivityModel } from './core/models/activity-model';
import { TodoService } from './core/services/todo-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, List, ActivityDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('todo');
  //readonly todo_service = inject(TodoService);
  acts: ActivityModel[] = [];

  setActs(value: ActivityModel[]){
    console.log("App Acts Before Function Call");
    console.log(this.acts);
    console.log("App Acts");
    this.acts = value;
    console.log(this.acts);
  }

  
}
