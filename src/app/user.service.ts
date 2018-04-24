import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandlingService } from './error-handling.service';

@Injectable()
export class UserService {

  userUrl = 'https://hacker-news.firebaseio.com/v0/user/';

  constructor(
    private http: HttpClient,
    private errorHandlingService: ErrorHandlingService
  ) { }

  getUser(userName): Observable<User> {
    return this.http.get<User>(`${this.userUrl}${userName}.json`)
      .catch(this.errorHandlingService.handleError);
  }
}
