import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bs-checkout-navigation-item',
  templateUrl: './checkout-navigation-item.component.html',
  styleUrls: ['./checkout-navigation-item.component.scss']
})
export class CheckoutNavigationItemComponent {
  @Input()
  public active: boolean;

  @Input()
  public past: boolean;

  @Input()
  public label: string;

  @Input()
  public path: string;
}
