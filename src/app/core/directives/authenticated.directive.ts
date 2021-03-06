import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {isAuthenticatedSelector} from '../../auth/store/auth.reducer';

@Directive({
  selector: '[bsAuthenticated]'
})
export class AuthenticatedDirective implements OnInit, OnDestroy {
  private authenticatedSubscription: Subscription;

  @Input()
  private bsAuthenticated;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private store: Store
  ) {
  }

  ngOnDestroy(): void {
    if (this.authenticatedSubscription) {
      this.authenticatedSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.authenticatedSubscription = this.store
      .select(isAuthenticatedSelector)
      .pipe(
        map(isAuthenticated => isAuthenticated && this.bsAuthenticated || !isAuthenticated && !this.bsAuthenticated)
      )
      .subscribe((isAuthenticated) => {
        isAuthenticated ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
      });
  }


}
