import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterLessonsComponent } from './monster-lessons.component';

describe('MonsterLessonsComponent', () => {
  let component: MonsterLessonsComponent;
  let fixture: ComponentFixture<MonsterLessonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonsterLessonsComponent]
    });
    fixture = TestBed.createComponent(MonsterLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
