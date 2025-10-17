import { Injectable } from '@angular/core';
import { Activity } from '../../activity/activity';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // createActivity(name:string, description:string, type:string, date:Date, important:boolean){
  //   let activity = new Activity
  // }
  createActivity(activity: Activity){
    localStorage.setItem(activity.name(), JSON.stringify(activity));
  }

  getActivity(key: string){
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item): null;
  }
  
}
