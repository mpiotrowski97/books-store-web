import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {HomeComponent} from './containers/home/home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {BooksCarouselComponent} from './components/books-carousel/books-carousel.component';
import {CoreModule} from '../core/core.module';
import {BookCardComponent} from './components/book-card/book-card.component';
import {CheckoutNavigationComponent} from './components/checkout-navigation/checkout-navigation.component';
import {CheckoutNavigationItemComponent} from './components/checkout-navigation/checkout-navigation-item/checkout-navigation-item.component';
import {BookPreviewComponent} from './containers/book-preview/book-preview.component';
import {RatingModule} from 'ng-starrating';
import { CategoryArchiveComponent } from './containers/category-archive/category-archive.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { ShelfPreviewComponent } from './containers/shelf-preview/shelf-preview.component';

@NgModule({
  declarations: [
    HomeComponent,
    BooksCarouselComponent,
    BookCardComponent,
    CheckoutNavigationComponent,
    CheckoutNavigationItemComponent,
    BookPreviewComponent,
    CategoryArchiveComponent,
    UserProfileComponent,
    ShelfPreviewComponent
  ],
  exports: [
    CheckoutNavigationComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    IvyCarouselModule,
    CoreModule,
    RatingModule,
  ]
})
export class MainModule {
}
