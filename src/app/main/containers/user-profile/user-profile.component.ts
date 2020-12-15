import { Component, OnInit } from '@angular/core';
import {User} from '../../../core/models/user';

@Component({
  selector: 'bs-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user: User = {
    id: '1',
    username: 'michpio97',
    email: '97.piotrowski.michal@gmail.com',
    roles: [''],
    enabled: true,
    firstName: 'Michał',
    lastName: 'Piotrowski',
    phoneNumber: '+48123123123',
    city: 'Kielce',
    postcode: '12-123',
    street: 'Sportowa',
    houseNumber: '6',
    province: 'Swietokrzyskie',
    country: 'Poland',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
