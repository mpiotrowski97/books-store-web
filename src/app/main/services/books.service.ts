import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../../core/models/book';
import {Pageable} from '../../core/models/api-response';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
  }

  public getBooks(category: string): Observable<Pageable<Book>> {
    return this.http.get<Pageable<Book>>(`books?category=${category}`);
  }

  public getBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(`books/${isbn}`);
  }

  public searchBooks(search: string): Observable<Pageable<Book>> {
    return this.http.get<Pageable<Book>>(`books/search?search=${search}`);
  }
}
