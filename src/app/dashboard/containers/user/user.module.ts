import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersCreateComponent } from './users-create/users-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UsersEditComponent } from './users-edit/users-edit.component';
import {DashboardModule} from '../../dashboard.module';
import {CoreModule} from '../../../core/core.module';


@NgModule({
  declarations: [UsersListComponent, UsersCreateComponent, UsersEditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    DashboardModule,
    CoreModule
  ]
})
export class UserModule { }
