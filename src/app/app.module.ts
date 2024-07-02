import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracComponent } from './prac/prac.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ReactiveFormsTaskComponent } from './reactive-forms-task/reactive-forms-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsTableComponent } from './reactive-forms-task/reactive-forms-table/reactive-forms-table.component';
import { MatTableModule } from '@angular/material/table';
import { MonsterLessonsComponent } from './monster-lessons/monster-lessons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    PracComponent,
    TwoWayBindingComponent,
    ReactiveFormsTaskComponent,
    ReactiveFormsTableComponent,
    MonsterLessonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
