import {Component, OnInit} from '@angular/core';
import {Shelf} from '../../../../core/models/shelf';
import {Observable} from 'rxjs';
import {ShelvesService} from '../../../services/shelves.service';
import {finalize} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {addSuccessNotificationAction} from '../../../store/notifications/notifications.actions';

@Component({
  selector: 'bs-user-shelves',
  templateUrl: './user-shelves.component.html',
  styleUrls: ['./user-shelves.component.scss']
})
export class UserShelvesComponent implements OnInit {
  public shelves: Shelf[];

  constructor(
    private shelvesService: ShelvesService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.fetchShelves();
  }

  private fetchShelves(): void {
    this.shelvesService.getShelves().subscribe(shelves => this.shelves = shelves);
  }

  handleShelveDeleteClick(shelf: Shelf): void {
    if (!confirm('Do you really want to remove shelf?')) {
      return;
    }

    this.shelvesService
      .removeShelf(shelf)
      .pipe(
        finalize(() => this.store.dispatch(addSuccessNotificationAction({content: `Shelf "${shelf.name}" has been removed.`})))
      )
      .subscribe(() => this.fetchShelves());
  }
}
