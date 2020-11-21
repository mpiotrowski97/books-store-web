import {Component} from '@angular/core';
import {LogoutService} from '../../services/logout.service';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private authService: LogoutService) {
  }

  handleLogoutClick(): void {
    this.authService.logout();
  }
}
