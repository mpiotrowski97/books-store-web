import {Component, OnInit} from '@angular/core';
import {Role, ROLE_USER, ROLES} from '../../../../core/models/roles';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../services/users.service';
import {Router} from '@angular/router';
import {NotificationsService} from '../../../../core/services/notifications.service';

@Component({
  selector: 'bs-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  public roles: Role[];
  public createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private notificationsService: NotificationsService
  ) {
  }

  ngOnInit(): void {
    this.roles = ROLES;
    this.createForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      username: this.formBuilder.control('', [Validators.required]),
      password: this.formBuilder.control('', [Validators.required]),
      roles: this.formBuilder.control(ROLE_USER, [Validators.required]),
      enabled: this.formBuilder.control(true)
    });
  }

  handleFormSubmit(): void {
    this.usersService.create({
      ...this.createForm.value,
      roles: this.createForm.get('roles').value.split(',')
    })
      .subscribe(
        () => {
          this.router.navigate(['/', 'dashboard', 'users']).then(() => {
            this.notificationsService.addSuccessNotification('User has been successfully added');
          });
        }
      );
  }
}
