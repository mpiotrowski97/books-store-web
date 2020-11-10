import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationsService} from '../../../../core/services/notifications.service';

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

  constructor(private formBuilder: FormBuilder, private notificationsService: NotificationsService) {
  }


  handleFormSubmit(): void {
    this.notificationsService.addSuccessNotification('Poprawnie zalogowano');
  }
}
