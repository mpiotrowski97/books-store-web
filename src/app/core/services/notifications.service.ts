import {Injectable} from '@angular/core';
import {Notification} from '../models/notification';
import {Subject} from 'rxjs';
import {NotificationType} from '../types/notification-type.enum';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificationsSubject = new Subject<Notification>();
  private notifications: Notification[] = [];

  public getNotificationsSubject(): Subject<Notification> {
    return this.notificationsSubject;
  }

  public getNotifications(): Notification[] {
    return this.notifications;
  }

  public addSuccessNotification(content: string): void {
    this.notifications.push({content, type: NotificationType.SUCCESS});
    this.notificationsSubject.next({content, type: NotificationType.SUCCESS});
  }

  public removeNotification(notification: Notification): void {
    this.notifications = this.notifications.filter(existingNotification => existingNotification !== notification);
    this.notificationsSubject.next(null);
  }
}
