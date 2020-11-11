import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'bs-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public formSubmitted = false;

  public forgotPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email])
    });
  }

  handleFormSubmit(): void {
    this.formSubmitted = true;
  }
}
