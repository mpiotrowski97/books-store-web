import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './core/services/error.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public errorExists = false;
  public errorSubscription: Subscription;

  constructor(private http: HttpClient, private errorService: ErrorService) {
  }

  ngOnInit(): void {
    this.http
      .get('auth/login')
      .subscribe();

    this.errorSubscription = this.errorService
      .getErrorSubject()
      .subscribe(error => this.errorExists = error);
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
