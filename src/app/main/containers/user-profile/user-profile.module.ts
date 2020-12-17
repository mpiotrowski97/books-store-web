import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserShelvesComponent } from './user-shelves/user-shelves.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { CommunityListComponent } from './community-list/community-list.component';


@NgModule({
  declarations: [UserShelvesComponent, UserOrdersComponent, CommunityListComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
