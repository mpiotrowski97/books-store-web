import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Book} from '../../core/models/book';
import {Observable} from 'rxjs';
import {BooksService} from '../services/books.service';

@Injectable({
  providedIn: 'root'
})
export class BookPreviewResolverService implements Resolve<Book>{

  constructor(private booksService: BooksService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
    return this.booksService.getBook(route.paramMap.get('isbn'));
  }
}
