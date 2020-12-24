import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InitService} from './core/services/init.service';
import {Store} from '@ngrx/store';
import {loadContextAction} from './main/store/main.actions';
import {isErrorSelector, MainState, readySelector} from './main/store/main.reducer';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public ready$: Observable<boolean>;
  public error$: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private initService: InitService,
    private store: Store<{ main: MainState }>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadContextAction());
    this.ready$ = this.store.select(readySelector);
    this.error$ = this.store.select(isErrorSelector);
  }
}
