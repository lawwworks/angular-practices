import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsTableComponent } from './reactive-forms-table.component';

describe('ReactiveFormsTableComponent', () => {
  let component: ReactiveFormsTableComponent;
  let fixture: ComponentFixture<ReactiveFormsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormsTableComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
