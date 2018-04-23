import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  userUrl = 'https://hacker-news.firebaseio.com/v0/user/';

  constructor(private http: HttpClient) { }

  getUser(userName): Observable<User> {
    return this.http.get<User>(`${this.userUrl}${userName}.json`);
  }
}
