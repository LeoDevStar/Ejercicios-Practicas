import { Injectable } from '@angular/core';
import { ActivityModel } from '../models/activity-model';
import { List } from '../models/list-model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  activity_list: List = {
    id: 0,
    total: 0,
    progress: 0,
    activities: []
  };
  createActivity(activity: ActivityModel){
    this.activity_list.total += 1;
    this.activity_list.activities.push(activity);
  }

  getActivity(key: string){    
    const act = this.activity_list.activities.find(acti => acti.name = key);
    return act;
  }

  setList(list_name: string){
    localStorage.setItem(list_name, JSON.stringify(this.activity_list));
  }

  getList(key: string){
    const item_list = localStorage.getItem(key);
    this.activity_list = item_list ? JSON.parse(item_list): this.activity_list;
    return this.activity_list;
  }

}
