import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CreateShelfResponse} from '../../core/models/api-response';
import {Shelf} from '../../core/models/shelf';

@Injectable({
  providedIn: 'root'
})
export class ShelvesService {

  constructor(private http: HttpClient) {
  }

  createShelf(name: string): Observable<CreateShelfResponse> {
    return this.http.post<CreateShelfResponse>(`shelves`, {name});
  }

  getShelves(): Observable<Shelf[]> {
    return this.http.get<Shelf[]>(`shelves`);
  }

  removeShelf(shelf: Shelf): Observable<void> {
    return this.http.delete<void>(`shelves/${shelf.id}`);
  }
}
