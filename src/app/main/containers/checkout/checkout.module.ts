import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SummaryComponent } from './summary/summary.component';
import {CoreModule} from '../../../core/core.module';


@NgModule({
  declarations: [CartComponent, ShippingComponent, SummaryComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CoreModule
  ]
})
export class CheckoutModule { }
