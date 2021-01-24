import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from './books-list/books-list.component';
import {BooksCreateComponent} from './books-create/books-create.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  },
  {
    path: 'create',
    component: BooksCreateComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookRoutingModule {
}
