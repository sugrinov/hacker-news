import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from './comments/comment';
import { ErrorHandlingService } from './error-handling.service';

@Injectable()
export class CommentService {

  private commentUrl = 'https://hacker-news.firebaseio.com/v0/item/';
  constructor(
    private http: HttpClient,
    private errorHandlingService: ErrorHandlingService
  ) { }

  getComment(commentId): Observable<Comment> {
    return this.http.get<Comment>(`${this.commentUrl}${commentId}.json`)
      .catch(this.errorHandlingService.handleError);
  }

}
