import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../../core/models/book';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {categoriesSelector} from '../../../core/store/core.reducer';
import {Category} from '../../../core/models/category';
import {Observable} from 'rxjs';
import {BooksService} from '../../services/books.service';
import {addSuccessNotificationAction} from '../../../main/store/notifications/notifications.actions';
import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'bs-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss']
})
export class BooksFormComponent implements OnInit {

  @Output()
  public formSubmit: EventEmitter<Book> = new EventEmitter<Book>();

  @Input()
  public submitLabel: string;

  public form: FormGroup;

  public categories$: Observable<Category[]>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private booksService: BooksService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.categories$ = this.store.select(categoriesSelector);

    this.form = this.formBuilder.group({
      isbn: this.formBuilder.control('', [Validators.required]),
      author: this.formBuilder.control('', [Validators.required]),
      description: this.formBuilder.control(''),
      publishedBy: this.formBuilder.control('', [Validators.required]),
      title: this.formBuilder.control('', [Validators.required]),
      categoryId: this.formBuilder.control('', [Validators.required]),
      price: this.formBuilder.control('', [Validators.required, Validators.min(0), Validators.max(10000)]),
      quantity: this.formBuilder.control('', [Validators.required, Validators.min(0), Validators.max(10000)])
    });
  }

  handleFormSubmit(): void {
    this.booksService.createBook({
      isbn: this.form.get('isbn').value,
      author: this.form.get('author').value,
      description: this.form.get('description').value,
      publishedBy: this.form.get('publishedBy').value,
      title: this.form.get('title').value,
      category: this.form.get('categoryId').value,
      price: this.form.get('price').value,
      quantity: this.form.get('quantity').value,
    })
      .pipe(
        finalize(() => this.router.navigateByUrl(`/dashboard/books`))
      )
      .subscribe(() => this.store.dispatch(addSuccessNotificationAction({content: 'A book has been added'})));
  }
}
