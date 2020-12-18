import {Component, OnInit} from '@angular/core';
import {Person} from '../../../../core/models/person';

@Component({
  selector: 'bs-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss']
})
export class CommunityListComponent implements OnInit {
  public people: Person[] = [
    {
      id: '1',
      firstName: 'Monica',
      lastName: 'Belluci',
      username: 'monbel21'
    },
    {
      id: '2',
      firstName: 'Michał',
      lastName: 'Piotrowski',
      username: 'micpio'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
