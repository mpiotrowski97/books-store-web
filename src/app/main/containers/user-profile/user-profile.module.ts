import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserShelvesComponent } from './user-shelves/user-shelves.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';


@NgModule({
  declarations: [UserShelvesComponent, UserOrdersComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
