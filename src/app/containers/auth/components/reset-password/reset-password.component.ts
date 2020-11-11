import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationsService} from '../../../../core/services/notifications.service';
import {ConfirmationValidator} from '../../validators/confirmation.validator';

@Component({
  selector: 'bs-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public resetPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private notificationsService: NotificationsService) {
  }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: this.formBuilder.control('', [Validators.required]),
      passwordConfirmation: this.formBuilder.control('', [Validators.required])
    }, {validators: [ConfirmationValidator('password', 'passwordConfirmation')]});
  }

  handleFormSubmit(): void {
    this.router.navigate(['auth', 'login']).then(() => {
      this.notificationsService.addSuccessNotification('Zmieniliśmy twoje hasło. Zaloguj się używając nowego hasła.');
    });
  }
}
