import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'bs-checkout-navigation',
  templateUrl: './checkout-navigation.component.html',
  styleUrls: ['./checkout-navigation.component.scss']
})
export class CheckoutNavigationComponent implements OnInit, OnDestroy {
  public currentRoutePath: string;
  private routerSubscription: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentRoutePath = this.router.url;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoutePath = this.router.url;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

}
