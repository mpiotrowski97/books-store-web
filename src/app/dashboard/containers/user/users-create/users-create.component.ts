import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {Router} from '@angular/router';
import {User} from '../../../../core/models/user';
import {Store} from '@ngrx/store';
import {addSuccessNotificationAction} from '../../../../main/store/notifications/notifications.actions';

@Component({
  selector: 'bs-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private router: Router,
    private store: Store
  ) {
  }

  ngOnInit(): void {
  }

  handleFormSubmit(user: User): void {
    this.usersService.create(user)
      .subscribe(
        () => {
          this.router.navigate(['/', 'dashboard', 'users']).then(() => {
            this.store.dispatch(addSuccessNotificationAction({
              content: 'User has been successfully added'
            }));
          });
        }
      );
  }
}
