import { Component, input } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.scss'
})
export class Category {
  readonly color = input.required<string>();
  readonly name = input.required<string>();

}
