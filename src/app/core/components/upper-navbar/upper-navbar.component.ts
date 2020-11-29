import { Component, OnInit } from '@angular/core';
import {LogoutService} from '../../services/logout.service';

@Component({
  selector: 'bs-upper-navbar',
  templateUrl: './upper-navbar.component.html',
  styleUrls: ['./upper-navbar.component.scss']
})
export class UpperNavbarComponent {
  constructor(private authService: LogoutService) {
  }

  handleLogoutClick(): void {
    this.authService.logout();
  }

}
