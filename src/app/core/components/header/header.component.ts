import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../../main/services/cart.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy, OnInit {
  public isCartLoading: boolean;
  public cartLoadingSubscription: Subscription;

  public cartValue: number;
  public cartValueSubscription: Subscription;

  constructor(private cartService: CartService, private authService: AuthService) {
  }

  ngOnDestroy(): void {
    if (this.cartLoadingSubscription) {
      this.cartLoadingSubscription.unsubscribe();
    }

    if (this.cartValueSubscription) {
      this.cartValueSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.cartLoadingSubscription = this.cartService.getIsCartLoadingSubject().subscribe(isLoading => this.isCartLoading = isLoading);
  }

}
