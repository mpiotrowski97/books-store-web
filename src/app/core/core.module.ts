import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';
import { RequiredMarkComponent } from './components/forms/required-mark/required-mark.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationComponent } from './components/notification/notification.component';



@NgModule({
  declarations: [HeaderComponent, RequiredMarkComponent, NotificationsComponent, NotificationComponent],
  exports: [
    HeaderComponent,
    RequiredMarkComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
