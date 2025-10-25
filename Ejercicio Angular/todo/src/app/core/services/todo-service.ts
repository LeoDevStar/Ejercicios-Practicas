import { Injectable } from '@angular/core';
import { ActivityModel } from '../models/activity-model';
import { List } from '../models/list-model';
import { CategoryModel } from '../models/category-model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  activity_list: List = {
    total: 0,
    progress: 0,
    activities: [],
    filter: "All"
  };

  category_list: CategoryModel[] = [];

  ////Category
  createCategory(category: CategoryModel){
    this.category_list.push(category);
  }

  getCategory(search_name: string){
    const cate = this.category_list.find(cate => cate.name == search_name);
    return cate;
  }

  setCategoryList(name: string){
    localStorage.setItem(name, JSON.stringify(this.category_list));
  }

  getCategoryList(name: string){
    const item_list = localStorage.getItem(name);
    this.category_list = item_list ? JSON.parse(item_list): this.category_list;
    return this.category_list;
  }

  /////Activity

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

  ////List

  setList(name: string){
    localStorage.setItem(name, JSON.stringify(this.activity_list));
  }

  getList(name: string){
    const item_list = localStorage.getItem(name);
    this.activity_list = item_list ? JSON.parse(item_list): this.activity_list;
    return this.activity_list;
  }

  updateProgress(act_id: number){
    if(this.activity_list.activities.find(activity => activity.id == act_id)?.checked == "True"){
      this.activity_list.progress += 1;
    }else{
      this.activity_list.progress -= 1;
    }
  }

  /////Filters

  getActivities(){
    //this.getList('todo-list');
    this.activity_list.filter = "All";
    return this.activity_list.activities;
  }
  getImportantActivities(){
    let important_activities: ActivityModel[] = [];
    important_activities = this.activity_list.activities.filter(activity => activity.important == "True");
    this.activity_list.filter = "Important";
    // this.activity_list = {
    //   total: important_activities.length,
    //   progress: 0,
    //   activities: important_activities
    // }
    return important_activities;
  }
}
