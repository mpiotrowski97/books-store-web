import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './core/services/error.service';
import {Observable, Subscription, throwError} from 'rxjs';
import {InitService} from './core/services/init.service';
import {finalize} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {loadCartAction} from './main/store/cart/cart.actions';
import {loadContextAction} from './main/store/main.actions';
import {CartState, reducer} from './main/store/cart/cart.reducer';
import {coreReducer} from './core/store/core.reducer';
import {mainReducer, MainState, readySelector} from './main/store/main.reducer';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public errorExists = false;
  public ready$: Observable<boolean>;
  public errorSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private initService: InitService,
    private store: Store<{main: MainState}>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadContextAction());
    this.ready$ = this.store.select(readySelector);

    this.errorSubscription = this.errorService
      .getErrorSubject()
      .subscribe(error => this.errorExists = error);

    // this.store.dispatch(loadCartAction());
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
