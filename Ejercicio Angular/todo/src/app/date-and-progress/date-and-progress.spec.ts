import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAndProgress } from './date-and-progress';

describe('DateAndProgress', () => {
  let component: DateAndProgress;
  let fixture: ComponentFixture<DateAndProgress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateAndProgress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateAndProgress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
