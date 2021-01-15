import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserShelvesComponent } from './user-shelves/user-shelves.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { CommunityListComponent } from './community-list/community-list.component';
import {AddShelfComponent} from './add-shelf/add-shelf.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [UserShelvesComponent, UserOrdersComponent, CommunityListComponent, AddShelfComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserProfileModule { }
