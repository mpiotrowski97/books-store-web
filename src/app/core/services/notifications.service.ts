import {Injectable} from '@angular/core';
import {Notification} from '../models/notification';
import {Subject} from 'rxjs';
import {NotificationType} from '../types/notification-type.enum';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificationsSubject = new Subject<Notification>();

  public getNotificationsSubject(): Subject<Notification> {
    return this.notificationsSubject;
  }

  public addSuccessNotification(content: string): void {
    this.notificationsSubject.next({content, type: NotificationType.SUCCESS});
  }
}
