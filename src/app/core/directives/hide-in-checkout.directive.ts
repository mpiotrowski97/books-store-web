import {Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[bsHideInCheckout]'
})
export class HideInCheckoutDirective implements OnInit, OnDestroy {
  private routeChangeSubscription: Subscription;

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

      this.viewContainer.clear();

      if (!this.router.isActive('checkout', false)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeChangeSubscription) {
      this.routeChangeSubscription.unsubscribe();
    }
  }
}
