import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { TOP_STORIES } from './top-stories/top-stories-mock';

@Injectable()
export class TopStoriesService {

  topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json';

  constructor(private http: HttpClient) { }

  getTopStories(): Observable<Array<number>> {
    return this.http.get<Array<number>>(this.topStoriesUrl);
  }
}
