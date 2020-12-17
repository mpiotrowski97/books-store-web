import {Component, OnInit} from '@angular/core';
import {Shelf} from '../../../../core/models/shelf';

@Component({
  selector: 'bs-user-shelves',
  templateUrl: './user-shelves.component.html',
  styleUrls: ['./user-shelves.component.scss']
})
export class UserShelvesComponent implements OnInit {

  public shelves: Shelf[] = [
    {
      id: '1',
      userId: '1',
      name: 'Favourites',
      booksQuantity: 42
    },
    {
      id: '2',
      userId: '1',
      name: 'Waiting',
      booksQuantity: 12
    },
    {
      id: '3',
      userId: '1',
      name: 'To read',
      booksQuantity: 50
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  handleShelveDeleteClick(): void {
    confirm('Do you really want to remove shelf?');
  }
}
