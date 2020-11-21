import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmationValidator} from '../../validators/confirmation.validator';
import {Router} from '@angular/router';
import {NotificationsService} from '../../../core/services/notifications.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'bs-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notificationsService: NotificationsService,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required]),
      passwordConfirmation: this.formBuilder.control('', [Validators.required])
    }, {
      validators: [ConfirmationValidator('password', 'passwordConfirmation')]
    });
  }

  handleSubmitEvent(): void {
    this
      .loginService
      .register(this.registerForm.get('username').value, this.registerForm.get('email').value, this.registerForm.get('password').value)
      .subscribe(
        () => {
          this.router.navigate(['auth', 'login']).then(() => {
            this.notificationsService.addSuccessNotification(
              'Założyliśmy konto. Na twoją skrzynke wysłaliśmy instrukcje odnośnie aktywacji konta'
            );
          });
        }
      );
  }
}
