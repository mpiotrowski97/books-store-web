import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UsersListComponent, UsersCreateComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
