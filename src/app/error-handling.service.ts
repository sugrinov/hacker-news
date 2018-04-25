import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { ErrorMessage } from './error-message';

@Injectable()
export class ErrorHandlingService {

  private _errorMessageSource = new Subject<ErrorMessage>();
  erorrMessage$: Observable<ErrorMessage> = this._errorMessageSource.asObservable();

  constructor() { }

  handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  createErrorDialog(errMsg: ErrorMessage) {
    console.error(errMsg);
    return this._errorMessageSource.next(errMsg);
  }
}
