import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../../main/services/cart.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isCartLoading = false;

  public cartValue: number;

  constructor(private cartService: CartService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
