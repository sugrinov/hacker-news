import { TestBed, inject } from '@angular/core/testing';

import { TopStoriesService } from './top-stories.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ErrorHandlingService } from './error-handling.service';

describe('TopStoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ TopStoriesService, ErrorHandlingService ]
    });
  });

  it('should be created', inject([TopStoriesService], (service: TopStoriesService) => {
    expect(service).toBeTruthy();
  }));
});
