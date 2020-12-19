import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './core/services/error.service';
import {Subscription, throwError} from 'rxjs';
import {InitService} from './core/services/init.service';
import {finalize} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {loadCartAction} from './main/store/cart.actions';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public errorExists = false;
  public ready = false;
  public errorSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private initService: InitService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.initService.init()
      .pipe(
        finalize(() => this.ready = true)
      )
      .subscribe();

    this.errorSubscription = this.errorService
      .getErrorSubject()
      .subscribe(error => this.errorExists = error);

    this.store.dispatch(loadCartAction());
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
