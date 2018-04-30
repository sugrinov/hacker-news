import { TestBed, inject } from '@angular/core/testing';

import { RouteGuardService } from './route-guard.service';
import { ErrorHandlingService } from '../error-handling.service';

describe('RouteGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteGuardService, ErrorHandlingService],
    });
  });

  it('should be created', inject([RouteGuardService], (service: RouteGuardService) => {
    expect(service).toBeTruthy();
  }));
});
