import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../../../core/models/book';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {BooksService} from '../../services/books.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'bs-category-archive',
  templateUrl: './category-archive.component.html',
  styleUrls: ['./category-archive.component.scss']
})
export class CategoryArchiveComponent implements OnInit, OnDestroy {
  public categoryName: string;

  public books: Book[];

  private categoryNameSubscription: Subscription;

  public isLoading: boolean;

  constructor(private route: ActivatedRoute, private bookService: BooksService) {
  }

  ngOnInit(): void {
    this.categoryNameSubscription = this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('id');
      this.fetchBooks(this.categoryName.toLowerCase());
    });
  }

  fetchBooks(category: string): void {
    this.isLoading = true;
    this.bookService.getBooks(category)
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(response => this.books = response.content);
  }

  ngOnDestroy(): void {
    this.categoryNameSubscription.unsubscribe();
  }

}
