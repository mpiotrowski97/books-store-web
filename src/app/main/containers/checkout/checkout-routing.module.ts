import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {ShippingComponent} from './shipping/shipping.component';
import {SummaryComponent} from './summary/summary.component';
import {CheckoutComponent} from './checkout.component';
import {ShippingGuard} from '../../guards/shipping.guard';
import {SummaryGuard} from '../../guards/summary.guard';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'shipping',
        component: ShippingComponent,
        canActivate: [ShippingGuard]
      },
      {
        path: 'summary',
        component: SummaryComponent,
        canActivate: [SummaryGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {
}
