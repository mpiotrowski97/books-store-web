import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationsService} from '../../../core/services/notifications.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'bs-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private notificationsService: NotificationsService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email])
    });
  }

  handleFormSubmit(): void {
    this.authService
      .passwordRecovery(this.forgotPasswordForm.get('email').value)
      .subscribe(
        () => {
          this.router.navigate(['auth', 'login']).then(() => {
            this.notificationsService.addSuccessNotification('Na twoją skrzynke wysłaliśmy instrukcję dotyczącą resetu hasła');
          });
        }
      );
  }
}
