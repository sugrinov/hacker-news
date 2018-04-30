import { TestBed, inject } from '@angular/core/testing';

import { ItemService } from './item.service';
import { HttpHandler, HttpClient } from '@angular/common/http';
import { ErrorHandlingService } from './error-handling.service';

describe('ItemService', () => {

  const reqURL = 'https://hacker-news.firebaseio.com/v0/item/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemService,
        HttpClient,
        HttpHandler,
        ErrorHandlingService
      ]
    });
  });

  it('should be created', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));
});
