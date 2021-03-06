import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {setErrorAction} from '../../main/store/main.actions';
import {addFailureNotificationAction} from '../../main/store/notifications/notifications.actions';

@Injectable()
export class ApplicationErrorsInterceptor implements HttpInterceptor {

  constructor(private store: Store) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (401 === error.status && error.url.includes(`login`)) {
            this.store.dispatch(addFailureNotificationAction({content: 'Invalid user data'}));
          } else if (422 !== error.status) {
            this.store.dispatch(setErrorAction({isError: true}));
          } else {
            this.store.dispatch(addFailureNotificationAction({content: error.error.message}));
          }

          return throwError(error);
        })
      );
  }
}
