import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { List } from './list/list';
import { ActivityDetails } from './activity-details/activity-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, List, ActivityDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('todo');
}
