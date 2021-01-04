import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderHistory} from '../../core/models/order-history';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) {
  }

  public getUserOrders(): Observable<OrderHistory[]> {
    return this.http.get<OrderHistory[]>(`orders/user`);
  }
}
