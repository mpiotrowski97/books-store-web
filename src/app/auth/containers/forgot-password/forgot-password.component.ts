import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Store} from '@ngrx/store';
import {addSuccessNotificationAction} from '../../../main/store/notifications/notifications.actions';

@Component({
  selector: 'bs-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private store: Store
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
            this.store.dispatch(addSuccessNotificationAction({content: 'Na twoją skrzynke wysłaliśmy instrukcję dotyczącą resetu hasła'}));
          });
        }
      );
  }
}
