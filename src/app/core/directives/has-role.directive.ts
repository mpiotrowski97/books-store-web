import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Directive({
  selector: '[bsHasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {

  private rolesSubscription: Subscription;

  @Input('bsHasRole')
  private role: string;

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.rolesSubscription = this.authService
      .getRoles()
      .pipe(
        map(roles => !!roles ? roles : []),
        map(roles => roles.includes(this.role))
      )
      .subscribe(hasRole => {
        hasRole ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
      });
  }

}
