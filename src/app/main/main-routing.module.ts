import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {CheckoutGuard} from './guards/checkout.guard';
import {BookPreviewComponent} from './containers/book-preview/book-preview.component';

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
    component: BookPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {

}
