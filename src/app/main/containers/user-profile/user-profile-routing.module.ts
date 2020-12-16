import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from './user-profile.component';
import {UserShelvesComponent} from './user-shelves/user-shelves.component';
import {UserOrdersComponent} from './user-orders/user-orders.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    children: [
      {
        path: '',
        component: UserShelvesComponent
      },
      {
        path: 'orders',
        component: UserOrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
