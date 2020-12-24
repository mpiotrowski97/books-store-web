import {Component, Input, OnInit} from '@angular/core';
import {Notification} from '../../models/notification';
import {Store} from '@ngrx/store';
import {removeNotificationAction} from '../../../main/store/notifications/notifications.actions';

@Component({
  selector: 'bs-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input()
  public notification: Notification;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    setTimeout(() => this.closeNotification(), 3000);
  }

  handleCloseClick(): void {
    this.closeNotification();
  }

  closeNotification(): void {
    this.store.dispatch(removeNotificationAction({notification: this.notification}));
  }
}
