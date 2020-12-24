import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {User} from '../../../../core/models/user';
import {ActivatedRoute, Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {addSuccessNotificationAction} from '../../../../main/store/notifications/notifications.actions';

@Component({
  selector: 'bs-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  private id: string;
  public user: User;
  public isLoading = true;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.usersService
      .fetchOne(this.id)
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(user => this.user = user);
  }

  handleFormSubmit(user: User): void {
    this.usersService.update(this.id, user)
      .subscribe(
        () => {
          this.router.navigate(['/', 'dashboard', 'users']).then(() => {
            this.store.dispatch(addSuccessNotificationAction({
              content: 'User has been successfully updated'
            }));
          });
        }
      );
  }
}
