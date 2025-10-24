import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Category } from '../category/category';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, Category],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  create_category: boolean = false;
  

  createCategory(){

  }

}
