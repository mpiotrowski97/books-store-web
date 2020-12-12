import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import { HomeComponent } from './containers/home/home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BooksCarouselComponent } from './components/books-carousel/books-carousel.component';
import {CoreModule} from '../core/core.module';
import { BookCardComponent } from './components/book-card/book-card.component';
import { CheckoutNavigationComponent } from './components/checkout-navigation/checkout-navigation.component';
import { CheckoutNavigationItemComponent } from './components/checkout-navigation/checkout-navigation-item/checkout-navigation-item.component';

@NgModule({
  declarations: [HomeComponent, BooksCarouselComponent, BookCardComponent, CheckoutNavigationComponent, CheckoutNavigationItemComponent],
  exports: [
    CheckoutNavigationComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    IvyCarouselModule,
    CoreModule
  ]
})
export class MainModule { }
