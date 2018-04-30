import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from './user-info/user';
import { ErrorHandlingService } from './error-handling.service';

describe('UserService', () => {

  const reqURL = 'https://hacker-news.firebaseio.com/v0/user/';
  let userService: UserService;
  let httpTestingController: HttpTestingController;

  const testUser: User = {
    created: new Date().getTime(),
    id: 'mockUser',
    karma: 55,
    submited: []
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ UserService, ErrorHandlingService ]
    });

    userService = TestBed.get(UserService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([UserService], (service: UserService) => {
    service.getUser('mockUser');
    expect(service).toBeTruthy();
  }));

  it('should get user data', () => {
    userService.getUser('mockUser')
      .subscribe((data: User) => {
        expect(data).toBe(testUser);
      });

    const userRequest: TestRequest = httpTestingController.expectOne(`${reqURL}mockUser.json`);
    expect(userRequest.request.method).toEqual('GET');

    userRequest.flush(testUser);

    httpTestingController.verify();
  });
});
