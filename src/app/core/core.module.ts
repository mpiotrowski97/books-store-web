import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {RequiredMarkComponent} from './components/forms/required-mark/required-mark.component';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {NotificationComponent} from './components/notification/notification.component';
import {ApplicationErrorComponent} from './components/application-error/application-error.component';
import {LoaderComponent} from './components/loader/loader.component';
import {ApplicationLoaderComponent} from './components/application-loader/application-loader.component';
import {AuthenticatedDirective} from './directives/authenticated.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    RequiredMarkComponent,
    NotificationsComponent,
    NotificationComponent,
    ApplicationErrorComponent,
    LoaderComponent,
    ApplicationLoaderComponent,
    AuthenticatedDirective
  ],
  exports: [
    HeaderComponent,
    RequiredMarkComponent,
    NotificationsComponent,
    ApplicationErrorComponent,
    LoaderComponent,
    ApplicationLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule {
}
