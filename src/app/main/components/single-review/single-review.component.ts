import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Review} from '../../../core/models/review';
import {finalize} from 'rxjs/operators';
import {addSuccessNotificationAction} from '../../store/notifications/notifications.actions';
import {ReviewsService} from '../../services/reviews.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'bs-single-review',
  templateUrl: './single-review.component.html',
  styleUrls: ['./single-review.component.scss']
})
export class SingleReviewComponent implements OnInit {

  @Output()
  public reviewChange: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  public review: Review;

  public hideReview: boolean;

  constructor(private reviewsService: ReviewsService, private store: Store) {
  }

  ngOnInit(): void {
    this.hideReview = this.review.spoiler;
  }

  handleSpoilerClick(review: Review): void {
    if (!confirm('Are you sure that you want mark this review as spoiler?')) {
      return;
    }

    this.reviewsService.markAsSpoiler(review.id)
      .pipe(
        finalize(() => this.reviewChange.emit())
      )
      .subscribe(() => this.store.dispatch(addSuccessNotificationAction({content: 'Review has been marked as spoiler.'})));
  }

  handleDeleteClick(review: Review): void {
    if (!confirm('Are you sure that you want delete this review?')) {
      return;
    }

    this.reviewsService.delete(review.id)
      .pipe(
        finalize(() => this.reviewChange.emit())
      )
      .subscribe(() => this.store.dispatch(addSuccessNotificationAction({content: 'Review has been deleted.'})));
  }
}
