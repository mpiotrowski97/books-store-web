import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {User} from '../../../../core/models/user';
import {ActivatedRoute} from '@angular/router';
import {finalize, startWith} from 'rxjs/operators';

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
    private route: ActivatedRoute
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
    this.usersService.update(this.id, user).subscribe();
  }
}
