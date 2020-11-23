import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksListComponent} from './books-list/books-list.component';
import {BookRoutingModule} from './book-routing.module';

@NgModule({
  declarations: [BooksListComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule {
}
