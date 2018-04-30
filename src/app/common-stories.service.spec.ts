import { TestBed, inject } from '@angular/core/testing';

import { CommonStoriesService } from './common-stories.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ErrorHandlingService } from './error-handling.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  template: '<p>Mock Comment Component</p>'
})
class MockCommentComponent {}

describe('CommonStoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ CommonStoriesService, HttpClient, HttpHandler, ErrorHandlingService, MockCommentComponent ]
    });
  });

  it('should be created', inject([CommonStoriesService], (service: CommonStoriesService) => {
    expect(service).toBeTruthy();
  }));
});
