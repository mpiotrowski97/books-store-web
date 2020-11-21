import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[bsAuthenticated]'
})
export class AuthenticatedDirective implements OnInit, OnDestroy {
  private authenticatedSubscription: Subscription;

  @Input()
  private bsAuthenticated;

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnDestroy(): void {
    if (this.authenticatedSubscription) {
      this.authenticatedSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.authenticatedSubscription = this.authService
      .isAuthenticated()
      .pipe(
        map(isAuthenticated => isAuthenticated && this.bsAuthenticated || !isAuthenticated && !this.bsAuthenticated)
      )
      .subscribe((isAuthenticated) => {
        isAuthenticated ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
      });
  }


}
