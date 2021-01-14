import {Component, OnInit} from '@angular/core';
import {Book} from '../../../core/models/book';
import {Review} from '../../../core/models/review';
import {ReviewsService} from '../../services/reviews.service';
import {finalize} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'bs-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  public book: Book = {
    isbn: '1750167136081',
    title: 'Edukacja',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deleniti dolorem maiores neque rerum! A ab amet aspernatur cum error eum eveniet fuga laboriosam, nam natus neque non odit officiis quam rem repellat repudiandae sapiente sint unde veniam. Ab accusantium consectetur delectus, exercitationem in iure molestias odit repellendus sed veritatis!',
    author: 'Malcolm XD',
    price: '31.99',
    category: 'Adventure',
    publishedBy: 'WAB'
  };

  public reviews: Review[];
  public reviewsLoading: boolean;

  public reviewForm: FormGroup;

  constructor(private reviewsService: ReviewsService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
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
}
