import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {Router} from '@angular/router';
import {NotificationsService} from '../../../../core/services/notifications.service';
import {User} from '../../../../core/models/user';

@Component({
  selector: 'bs-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.scss']
})
export class UsersCreateComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private router: Router,
    private notificationsService: NotificationsService
  ) {
  }

  ngOnInit(): void {
  }

  handleFormSubmit(user: User): void {
    this.usersService.create(user)
      .subscribe(
        () => {
          this.router.navigate(['/', 'dashboard', 'users']).then(() => {
            this.notificationsService.addSuccessNotification('User has been successfully added');
          });
        }
      );
  }
}
