import {Component, OnInit} from '@angular/core';
import {Shelf} from '../../../../core/models/shelf';
import {Observable} from 'rxjs';
import {ShelvesService} from '../../../services/shelves.service';

@Component({
  selector: 'bs-user-shelves',
  templateUrl: './user-shelves.component.html',
  styleUrls: ['./user-shelves.component.scss']
})
export class UserShelvesComponent implements OnInit {
  public shelves$: Observable<Shelf[]>;

  constructor(private shelvesService: ShelvesService) {
  }

  ngOnInit(): void {
    this.shelves$ = this.shelvesService.getShelves();
  }

  handleShelveDeleteClick(): void {
    confirm('Do you really want to remove shelf?');
  }
}
