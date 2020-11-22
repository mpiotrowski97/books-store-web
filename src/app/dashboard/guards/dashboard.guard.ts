import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AuthService} from '../../auth/services/auth.service';
import {ROLE_ADMINISTRATOR} from '../../core/models/roles';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.authService.hasRole(ROLE_ADMINISTRATOR) ? true : this.router.createUrlTree(['/']);
  }
}
