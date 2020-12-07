import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ShippingMethod} from '../../core/models/shipping-method';

@Injectable({
  providedIn: 'root'
})
export class ShippingMethodService {

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<ShippingMethod[]> {
    return this.http.get<ShippingMethod[]>('shipping-methods');
  }
}
