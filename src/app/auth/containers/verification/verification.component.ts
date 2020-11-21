import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {NotificationsService} from '../../../core/services/notifications.service';

@Component({
  selector: 'bs-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private notificationsService: NotificationsService
  ) {
  }

  ngOnInit(): void {
    this.authService
      .verifyUser(this.route.snapshot.queryParamMap.get('token'))
      .subscribe(
        () => {
          this.router.navigate(['auth', 'login'])
            .then(() => this.notificationsService.addSuccessNotification('Aktywowaliśmy twoje konto. Możesz się zalogować.'));
        }
      );
  }

}
