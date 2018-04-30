import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';
import { MomentModule } from 'angular2-moment';
import { Input, Component } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { of } from 'rxjs/observable/of';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../testing/ActivatedRouteStub';

@Component({
  selector: 'app-submissions',
  template: ''
})
class MockSubmissionsComponent {
  @Input() submissions;
}

class UserServiceMock {
  getUser(userName): Observable<User> {
    return of<User>({ created: 123, id: 'username', karma: 25, submited: [] });
  }
}

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;
  const activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub({ path: 'user'}, { username: 'username'});
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoComponent, MockSubmissionsComponent ],
      imports: [ MomentModule ],
      providers: [
        { provide: UserService, useClass: UserServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
