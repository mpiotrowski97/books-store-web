import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksListComponent} from './books-list/books-list.component';
import {BookRoutingModule} from './book-routing.module';
import {CoreModule} from '../../../core/core.module';

@NgModule({
  declarations: [BooksListComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    CoreModule
  ]
})
export class BookModule {
}
