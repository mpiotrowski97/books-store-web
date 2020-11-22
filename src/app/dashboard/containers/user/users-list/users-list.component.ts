import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {User} from '../../../../core/models/user';

@Component({
  selector: 'bs-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users: User[] = [];

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
    this.usersService
      .list()
      .subscribe(response => {
        this.users = response.content;
      });
  }
}
