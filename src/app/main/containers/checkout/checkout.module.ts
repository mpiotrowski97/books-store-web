import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SummaryComponent } from './summary/summary.component';
import {CoreModule} from '../../../core/core.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CheckoutComponent } from './checkout.component';
import {MainModule} from '../../main.module';


@NgModule({
  declarations: [CartComponent, ShippingComponent, SummaryComponent, CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    MainModule
  ]
})
export class CheckoutModule { }
