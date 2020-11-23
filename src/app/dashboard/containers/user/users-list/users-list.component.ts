import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {User} from '../../../../core/models/user';
import {Pageable} from '../../../../core/models/api-response';
import {pipe} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'bs-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public isLoading = true;
  public users: User[] = [];
  public pageable: Pageable<User>;

  constructor(
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.getList();
  }

  handleDeleteClick(user: User): void {
    if (!confirm('Do you want to delete this user?')) {
      return;
    }

    this.usersService.delete(user)
      .subscribe(() => this.getList());
  }

  getList(): void {
    this.isLoading = true;

    this.usersService
      .list()
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(response => {
        this.users = response.content;
        this.pageable = response;
      });
  }
}
