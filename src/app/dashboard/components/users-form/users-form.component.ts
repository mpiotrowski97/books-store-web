import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Role, ROLE_USER, ROLES} from '../../../core/models/roles';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../core/models/user';

@Component({
  selector: 'bs-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  @Input()
  public submitLabel: string;

  @Input()
  public editUser: User;

  @Output()
  public formSubmit = new EventEmitter<User>();

  public roles: Role[];

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.roles = ROLES;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control(this.editUser?.email, [Validators.required, Validators.email]),
      username: this.formBuilder.control(this.editUser?.username, [Validators.required]),
      password: this.formBuilder.control('', [...!this.editUser ? [Validators.required] : []]),
      roles: this.formBuilder.control(this.userRole(), [Validators.required]),
      firstName: this.formBuilder.control(this.editUser?.firstName, [Validators.required]),
      lastName: this.formBuilder.control(this.editUser?.lastName, [Validators.required]),
      phoneNumber: this.formBuilder.control(this.editUser?.phoneNumber, [Validators.required]),
      city: this.formBuilder.control(this.editUser?.city),
      street: this.formBuilder.control(this.editUser?.street),
      houseNumber: this.formBuilder.control(this.editUser?.houseNumber),
      province: this.formBuilder.control(this.editUser?.province),
      postcode: this.formBuilder.control(this.editUser?.postcode),
      country: this.formBuilder.control(this.editUser?.country),
      enabled: this.formBuilder.control(this.editUser?.enabled || true)
    });
  }

  private userRole(): string {
    if (!this.editUser) {
      return ROLE_USER;
    }

    return this.editUser.roles.join(',');
  }

  handleFormSubmit(): void {
    this.formSubmit.emit({
      ...this.form.value,
      roles: this.form.get('roles').value.split(',')
    });
  }
}
