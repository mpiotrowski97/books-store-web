import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import { HomeComponent } from './containers/home/home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BooksCarouselComponent } from './components/books-carousel/books-carousel.component';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [HomeComponent, BooksCarouselComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    IvyCarouselModule,
    CoreModule
  ]
})
export class MainModule { }
