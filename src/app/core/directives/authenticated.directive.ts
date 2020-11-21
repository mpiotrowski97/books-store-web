import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../../containers/auth/services/auth.service';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[bsAuthenticated]'
})
export class AuthenticatedDirective implements OnInit, OnDestroy{
  private authenticatedSubscription: Subscription;

  @Input()
  private bsAuthenticated;

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnDestroy(): void {
    if (this.authenticatedSubscription) {
      this.authenticatedSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.authenticatedSubscription = this.authService.isAuthenticated().subscribe((isAuthenticated) => {
      if (isAuthenticated && this.bsAuthenticated || !isAuthenticated && !this.bsAuthenticated) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }


}
