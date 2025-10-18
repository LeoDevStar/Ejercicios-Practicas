import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ActivityModel } from '../core/models/activity-model';

@Component({
  selector: 'app-activity',
  imports: [NgClass],
  templateUrl: './activity.html',
  styleUrl: './activity.scss'
})
export class Activity {
  // readonly name = input.required<string>();
  // readonly type = input.required<string>();
  readonly activity = input.required<ActivityModel>();

  css_class:string = ''
  typeStyles(typename: string){
    switch (typename) {
      case "Work":
        this.css_class = 'type-work';
        break;
      case "Personal":
        this.css_class = 'type-personal';
        break;
      case "Household":
        this.css_class = 'type-household';
        break;
      case "Business":
        this.css_class = 'type-business';
        break;
    
      default:
        break;
    }
    return this.css_class;
  }
}
