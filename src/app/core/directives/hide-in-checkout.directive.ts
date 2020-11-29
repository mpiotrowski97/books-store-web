import {Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {BehaviorSubject, Subscription} from 'rxjs';

@Directive({
  selector: '[bsHideInCheckout]'
})
export class HideInCheckoutDirective implements OnInit, OnDestroy {
  private routeChangeSubscription: Subscription;
  private routeChange: BehaviorSubject<void> = new BehaviorSubject<void>(null);

  constructor(
    private router: Router,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    this.routeChangeSubscription = this.router.events.subscribe(event => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }

      this.routeChange.next();
    });

    this.routeChangeSubscription = this.routeChange.subscribe(() => this.onRouteChange());
  }

  ngOnDestroy(): void {
    if (this.routeChangeSubscription) {
      this.routeChangeSubscription.unsubscribe();
    }
  }

  onRouteChange(): void {
    if (!this.router.isActive('checkout', false)) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
