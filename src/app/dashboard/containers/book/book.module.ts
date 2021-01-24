import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksListComponent} from './books-list/books-list.component';
import {BookRoutingModule} from './book-routing.module';
import {CoreModule} from '../../../core/core.module';
import { BooksCreateComponent } from './books-create/books-create.component';
import {DashboardModule} from '../../dashboard.module';

@NgModule({
  declarations: [BooksListComponent, BooksCreateComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    CoreModule,
    DashboardModule
  ]
})
export class BookModule {
}
