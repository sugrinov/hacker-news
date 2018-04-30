import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesComponent } from './pages.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../testing/ActivatedRouteStub';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const activatedRouteStub = new ActivatedRouteStub({ path: 'item' });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    component.pages = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
