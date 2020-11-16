import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';
import { RequiredMarkComponent } from './components/forms/required-mark/required-mark.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ApplicationErrorComponent } from './components/application-error/application-error.component';



@NgModule({
  declarations: [HeaderComponent, RequiredMarkComponent, NotificationsComponent, NotificationComponent, ApplicationErrorComponent],
  exports: [
    HeaderComponent,
    RequiredMarkComponent,
    NotificationsComponent,
    ApplicationErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
