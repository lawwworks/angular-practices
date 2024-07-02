import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Item } from './item.model';

@Component({
  selector: 'reactive-forms-task',
  templateUrl: './reactive-forms-task.component.html',
  styleUrls: ['./reactive-forms-task.component.css'],
})
export class ReactiveFormsTaskComponent {
  title = 'Reactive forms';

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(
      'submitted form',
      this.registerForm.value,
      this.registerForm.invalid
    );
    this.isSubmitted = true;
  }
}
