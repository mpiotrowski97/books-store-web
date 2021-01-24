import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../core/core.module';
import { BooksFormComponent } from './components/books-form/books-form.component';



@NgModule({
  declarations: [DashboardComponent, UsersFormComponent, BooksFormComponent],
  exports: [
    UsersFormComponent,
    BooksFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class DashboardModule { }
