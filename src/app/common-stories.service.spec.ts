import { TestBed, inject } from '@angular/core/testing';

import { CommonStoriesService } from './common-stories.service';

describe('CommonStoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonStoriesService]
    });
  });

  it('should be created', inject([CommonStoriesService], (service: CommonStoriesService) => {
    expect(service).toBeTruthy();
  }));
});
