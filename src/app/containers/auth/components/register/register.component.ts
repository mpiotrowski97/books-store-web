import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmationValidator} from '../../validators/confirmation.validator';
import {Router} from '@angular/router';
import {NotificationsService} from '../../../../core/services/notifications.service';

@Component({
  selector: 'bs-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private notificationsService: NotificationsService) {
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
    this.notificationsService.addSuccessNotification('Założyliśmy konto. Na twoją skrzynke wysłaliśmy instrukcje odnośnie aktywacji konta');
    this.router.navigate(['auth', 'login']);
  }
}
