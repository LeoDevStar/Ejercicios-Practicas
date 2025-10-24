import { Injectable } from '@angular/core';
import { ActivityModel } from '../models/activity-model';
import { List } from '../models/list-model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  activity_list: List = {
    total: 0,
    progress: 0,
    activities: [],
    categories: []
  };
  createActivity(activity: ActivityModel){
    this.activity_list.total += 1;
    this.activity_list.activities.push(activity);
  }

  getActivity(search_id: number){    
    const act = this.activity_list.activities.find(acti => acti.id == search_id);
    return act;
  }

  updateActivity(search_id: number, activity: ActivityModel){
    this.activity_list.activities.splice(this.activity_list.activities.findIndex(element => element.id == search_id), 1, activity);
  }

  deleteActivity(search_id: number){
    if(this.activity_list.activities.find(element => element.id == search_id) != undefined){
      this.activity_list.activities.splice(search_id, 1);
      this.activity_list.total -= 1;

      this.activity_list.activities.forEach((element)=>{
        if(element.id > search_id){
          element.id -= 1;
        }
        
      });
    }
    
  }

  setList(name: string){
    localStorage.setItem(name, JSON.stringify(this.activity_list));
  }

  getList(name: string){
    const item_list = localStorage.getItem(name);
    this.activity_list = item_list ? JSON.parse(item_list): this.activity_list;
    return this.activity_list;
  }

}
