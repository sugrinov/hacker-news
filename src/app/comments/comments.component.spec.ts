import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { CommentService } from '../comment.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ErrorHandlingService } from '../error-handling.service';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/of';
import { of } from 'rxjs/observable/of';
import { PipeTransform, Pipe } from '@angular/core';
import { MomentModule, TimeAgoPipe } from 'angular2-moment';
import { CommonStoriesComponent } from '../common-stories/common-stories.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const COMMENT_OBJ: Comment = new Comment();
class MockCommentService {
  getComment(id): Observable<Comment> {
    return of(COMMENT_OBJ);
  }
}

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsComponent ],
      providers: [ { provide: CommentService, useClass: MockCommentService } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
