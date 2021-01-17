import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {CheckoutGuard} from './guards/checkout.guard';
import {BookPreviewComponent} from './containers/book-preview/book-preview.component';
import {CategoryArchiveComponent} from './containers/category-archive/category-archive.component';
import {ShelfPreviewComponent} from './containers/shelf-preview/shelf-preview.component';
import {PaymentCompleteComponent} from './containers/payment-complete/payment-complete.component';
import {BookPreviewResolverService} from './resolvers/book-preview-resolver.service';
import {BooksSearchComponent} from './containers/books-search/books-search.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'checkout',
    loadChildren: () => import('./containers/checkout/checkout.module').then(m => m.CheckoutModule),
    canActivate: [CheckoutGuard]
  },
  {
    path: 'book/:isbn',
    component: BookPreviewComponent,
    resolve: {
      book: BookPreviewResolverService
    }
  },
  {
    path: 'category/:id',
    component: CategoryArchiveComponent
  },
  {
    path: 'profile',
    loadChildren: () => import('./containers/user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
  {
    path: 'shelves/:id',
    component: ShelfPreviewComponent
  },
  {
    path: 'payment-complete',
    component: PaymentCompleteComponent
  },
  {
    path: 'books',
    component: BooksSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

}
