import { Injectable } from '@angular/core';
import { ActivityModel } from '../models/activity-model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // createActivity(act_name:string, act_description:string){
  //   let activity: ActivityModel = {
  //     name: act_name,
  //     description: act_description
  //   }
  //   localStorage.setItem(activity.name, JSON.stringify(activity));
  // }
  createActivity(activity: ActivityModel){
    localStorage.setItem(activity.name, JSON.stringify(activity));
  }

  getActivity(key: string){
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item): null;
  }
  
}
