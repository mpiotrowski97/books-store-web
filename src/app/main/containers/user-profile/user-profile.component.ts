import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/models/user';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {loggedUserSelector} from '../../../auth/store/auth.reducer';

@Component({
  selector: 'bs-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user$: Observable<User>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.user$ = this.store.select(loggedUserSelector);
  }

}
