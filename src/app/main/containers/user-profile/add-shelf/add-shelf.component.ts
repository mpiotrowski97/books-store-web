import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShelvesService} from '../../../services/shelves.service';
import {finalize} from 'rxjs/operators';
import {addSuccessNotificationAction} from '../../../store/notifications/notifications.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'bs-add-shelf',
  templateUrl: './add-shelf.component.html',
  styleUrls: ['./add-shelf.component.scss']
})
export class AddShelfComponent implements OnInit {

  public createShelfForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private shelvesService: ShelvesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createShelfForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required)
    });
  }

  handleFormSubmit(): void {
    this.shelvesService.createShelf(this.createShelfForm.get('name').value)
      .pipe(
        finalize(() => addSuccessNotificationAction({content: 'Shelf has been added.'}))
      )
      .subscribe(() => this.router.navigateByUrl('/profile'));
  }
}
