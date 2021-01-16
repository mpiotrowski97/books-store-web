import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Review} from '../../core/models/review';
import {CreateReviewRequest} from '../../core/models/api-request';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) {
  }

  public getReviews(bookIsbn: string): Observable<Review[]> {
    return this.http.get<Review[]>(`reviews/${bookIsbn}`);
  }

  public createReview(request: CreateReviewRequest): Observable<Review> {
    return this.http.post<Review>(`reviews`, request);
  }

  markAsSpoiler(id: string): Observable<void> {
    return this.http.put<void>(`reviews/${id}/spoiler`, {});
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`reviews/${id}`);
  }
}
