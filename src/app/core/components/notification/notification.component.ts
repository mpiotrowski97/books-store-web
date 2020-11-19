import {Component, Input, OnInit} from '@angular/core';
import {Notification} from '../../models/notification';
import {NotificationsService} from '../../services/notifications.service';

@Component({
  selector: 'bs-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input()
  public notification: Notification;

  constructor(private notificationsService: NotificationsService) {
  }

  ngOnInit(): void {
    setTimeout(() => this.closeNotification(), 3000);
  }

  handleCloseClick(): void {
    this.closeNotification();
  }

  closeNotification(): void {
    this.notificationsService.removeNotification(this.notification);
  }
}
