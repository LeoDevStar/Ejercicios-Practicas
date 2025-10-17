import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-activity-details',
  imports: [NgClass],
  templateUrl: './activity-details.html',
  styleUrl: './activity-details.scss'
})
export class ActivityDetails {
  showDetails = input.required<boolean>();
}
