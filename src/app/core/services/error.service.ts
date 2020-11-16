import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorSubject: Subject<boolean> = new Subject<boolean>();

  public getErrorSubject(): Subject<boolean> {
    return this.errorSubject;
  }

  public throwError(): void {
    this.errorSubject.next(true);
  }

}

