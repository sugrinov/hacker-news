import { TestBed, inject } from '@angular/core/testing';

import { CommentService } from './comment.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ErrorHandlingService } from './error-handling.service';

describe('CommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ CommentService, HttpClient, HttpHandler, ErrorHandlingService ],
    });
  });

  it('should be created', inject([CommentService], (service: CommentService) => {
    expect(service).toBeTruthy();
  }));
});
