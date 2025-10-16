import { Component, input } from '@angular/core';

@Component({
  selector: 'app-activity',
  imports: [],
  templateUrl: './activity.html',
  styleUrl: './activity.scss'
})
export class Activity {
  readonly name = input.required<string>();
  readonly type = input.required<string>();
}
