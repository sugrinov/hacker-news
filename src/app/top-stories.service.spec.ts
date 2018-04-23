import { TestBed, inject } from '@angular/core/testing';

import { TopStoriesService } from './top-stories.service';

describe('TopStoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopStoriesService]
    });
  });

  it('should be created', inject([TopStoriesService], (service: TopStoriesService) => {
    expect(service).toBeTruthy();
  }));
});
