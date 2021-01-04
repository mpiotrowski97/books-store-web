import {Component, OnInit} from '@angular/core';
import {UserProfileService} from '../../../services/user-profile.service';
import {Observable} from 'rxjs';
import {OrderHistory} from '../../../../core/models/order-history';

@Component({
  selector: 'bs-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  public orders$: Observable<OrderHistory[]>;

  constructor(private userProfileService: UserProfileService) {
  }

  ngOnInit(): void {
    this.orders$ = this.userProfileService.getUserOrders();
  }

}
