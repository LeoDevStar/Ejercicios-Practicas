import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ActivityModel } from '../core/models/activity-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activity',
  imports: [NgClass, FormsModule],
  templateUrl: './activity.html',
  styleUrl: './activity.scss'
})
export class Activity {
  // readonly name = input.required<string>();
  // readonly type = input.required<string>();
  readonly activity = input.required<ActivityModel>();

  activity_selected = output<ActivityModel>();
  check_value: boolean =  false;
  activity_checked = output<boolean>();

  activity_show(){
    this.activity_selected.emit(this.activity());
  }

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

  activityCheck(){
    //console.log('Test Check: ' + this.check_value);
    if(this.check_value == false){
      //console.log('Check: ' + this.check_value);
      this.activity_checked.emit(true);
    }else{
      //console.log('Check: ' + this.check_value);
      this.activity_checked.emit(false);
    }
  }
}
