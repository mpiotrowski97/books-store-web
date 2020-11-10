import {Component, Input, OnInit} from '@angular/core';
import {Notification} from '../../models/notification';

@Component({
  selector: 'bs-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input()
  public notification: Notification;

  constructor() { }

  ngOnInit(): void {
  }

}
