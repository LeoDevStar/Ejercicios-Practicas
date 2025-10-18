import { Injectable } from '@angular/core';
import { ActivityModel } from '../models/activity-model';
import { List } from '../models/list-model';


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
  activity_list: List = {
    total: 0,
    progress: 0,
    activities: []
  }
  createActivity(activity: ActivityModel){
    //localStorage.setItem(activity.name, JSON.stringify(activity));
    this.activity_list.total += 1;
    this.activity_list.activities.push(activity);
  }

  // createActivity(list_name:string, activity: ActivityModel){
  //   //localStorage.setItem(activity.name, JSON.stringify(activity));
  //   let list = this.getList(list_name);
  //   if(list != null){
  //     this.activity_list.total += 1;
  //     this.activity_list.activities.push(activity);
  //   }
  //   // this.activity_list.total += 1;
  //   // this.activity_list.activities.push(activity);
  // }

  getActivity(key: string){
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item): null;
  }


  setList(list_name: string){
    localStorage.setItem(list_name, JSON.stringify(this.activity_list));
  }

  getList(key: string){
    const item_list = localStorage.getItem(key);
    return item_list ? JSON.parse(item_list): null;
  }

  

  
}
