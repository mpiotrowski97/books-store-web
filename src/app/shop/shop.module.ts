import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopRoutingModule} from './shop-routing.module';
import { HomeComponent } from './containers/home/home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BooksCarouselComponent } from './components/books-carousel/books-carousel.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [HomeComponent, BooksCarouselComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    IvyCarouselModule,
    CoreModule
  ]
})
export class ShopModule { }
