import {Component, OnInit} from '@angular/core';
import {Book} from '../../../core/models/book';
import {Review} from '../../../core/models/review';
import {ReviewsService} from '../../services/reviews.service';
import {finalize} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'bs-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  public book: Book;

  public reviews: Review[];
  public reviewsLoading: boolean;

  public reviewForm: FormGroup;

  constructor(
    private booksService: BooksService,
    private reviewsService: ReviewsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.book = this.route.snapshot.data.book;

    this.reviewForm = this.formBuilder.group({
      content: this.formBuilder.control('', [Validators.required])
    });

    this.fetchReviews();
  }

  handleRateClick(): void {
  }

  private fetchReviews(): void {
    this.reviewsLoading = true;

    this.reviewsService.getReviews(this.book.isbn)
      .pipe(
        finalize(() => this.reviewsLoading = false)
      )
      .subscribe(response => this.reviews = response);
  }

  public handleReviewFormSubmit(): void {
    this.reviewsService.createReview({content: this.reviewForm.get('content').value, bookIsbn: this.book.isbn})
      .pipe(
        finalize(() => {
          this.reviewForm.reset();
          this.fetchReviews();
        })
      )
      .subscribe();
  }

  handleAddToCartClick(): void {
    
  }
}
