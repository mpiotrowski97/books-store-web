import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ErrorService} from '../services/error.service';

@Injectable()
export class ApplicationErrorsInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (422 !== error.status) {
            this.errorService.throwError();
          }

          return throwError(error);
        })
      );
  }
}
