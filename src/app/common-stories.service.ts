import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandlingService } from './error-handling.service';

@Injectable()
export class CommonStoriesService {

  commonStoriesUrl = 'https://hacker-news.firebaseio.com/v0/${type}.json';

  constructor(
    private http: HttpClient,
    private errorHandlingService: ErrorHandlingService
  ) { }

  getCommonStories(type): Observable<Array<number>> {
    const typeStoryUrl = this.commonStoriesUrl.replace('${type}', type).toLowerCase();
    return this.http.get<Array<number>>(typeStoryUrl)
      .catch(this.errorHandlingService.handleError);
  }
}
