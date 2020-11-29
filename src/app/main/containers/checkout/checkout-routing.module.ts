import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {ShippingComponent} from './shipping/shipping.component';
import {SummaryComponent} from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cart'
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'shipping',
    component: ShippingComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {
}
