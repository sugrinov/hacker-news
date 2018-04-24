import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TopStory } from './top-stories/top-story';
import 'rxjs/add/operator/catch';
import { ErrorHandlingService } from './error-handling.service';


@Injectable()
export class ItemService {

  itemUrl = 'https://hacker-news.firebaseio.com/v0/item/';

  constructor(
    private http: HttpClient,
    private errorHandlingService: ErrorHandlingService
  ) { }

  fetchItem(id): Observable<TopStory> {
    return this.http.get<TopStory>(`${this.itemUrl}${id}.json`)
        .catch(this.errorHandlingService.handleError);
  }
}
