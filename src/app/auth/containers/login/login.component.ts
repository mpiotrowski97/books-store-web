import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationsService} from '../../../core/services/notifications.service';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup = this.formBuilder.group({
    username: this.formBuilder.control('', [Validators.required]),
    password: this.formBuilder.control('', [Validators.required])
  });

  constructor(
    private formBuilder: FormBuilder,
    private notificationsService: NotificationsService,
    private loginService: LoginService,
    private router: Router
  ) {
  }

  handleFormSubmit(): void {
    this.loginService
      .login(this.loginForm.get('username').value, this.loginForm.get('password').value)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
