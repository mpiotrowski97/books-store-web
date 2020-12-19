import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {BaseHrefInterceptor} from './core/interceptors/base-href.interceptor';
import {ApplicationErrorsInterceptor} from './core/interceptors/application-errors.interceptor';
import {StoreModule} from '@ngrx/store';
import {reducer} from './main/store/cart.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CartEffects} from './main/store/cart.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    HttpClientXsrfModule,
    StoreModule.forRoot({cart: reducer}),
    EffectsModule.forRoot([CartEffects])
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BaseHrefInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ApplicationErrorsInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
