import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Store} from '@ngrx/store';
import {addSuccessNotificationAction} from '../../../main/store/notifications/notifications.actions';

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
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.authService
      .verifyUser(this.route.snapshot.queryParamMap.get('token'))
      .subscribe(
        () => {
          this.router.navigate(['auth', 'login']).then(() => {
            this.store.dispatch(addSuccessNotificationAction({
              content: 'Aktywowaliśmy twoje konto. Możesz się zalogować.'
            }));
          });
        }
      );
  }

}
