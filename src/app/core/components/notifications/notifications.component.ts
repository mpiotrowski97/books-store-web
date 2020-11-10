import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotificationsService} from '../../services/notifications.service';
import {Subscription} from 'rxjs';
import {Notification} from '../../models/notification';

@Component({
  selector: 'bs-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  private notificationsSubscription: Subscription;
  public notifications: Notification[] = [];

  constructor(private notificationsService: NotificationsService) {
  }

  ngOnInit(): void {
    this.notificationsSubscription = this.notificationsService
      .getNotificationsSubject()
      .subscribe(notification => this.notifications.push(notification));
  }

  ngOnDestroy(): void {
    this.notificationsSubscription.unsubscribe();
  }

}
