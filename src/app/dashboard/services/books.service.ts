import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pageable} from '../../core/models/api-response';
import {Book} from '../../core/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
  }

  public getBooks(): Observable<Pageable<Book>> {
    return this.http.get<Pageable<Book>>('books');
  }
}
