import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TopStory } from './top-stories/top-story';
import 'rxjs/operator/catch';


@Injectable()
export class ItemService {

  itemUrl = 'https://hacker-news.firebaseio.com/v0/item/';

  constructor(private http: HttpClient) { }

  fetchItem(id): Observable<TopStory> {
    return this.http.get<TopStory>(`${this.itemUrl}${id}.json`);
  }
}
