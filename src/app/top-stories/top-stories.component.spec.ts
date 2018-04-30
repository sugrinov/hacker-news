import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStoriesComponent } from './top-stories.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { TopStoriesService } from '../top-stories.service';
import { ActivatedRouteStub } from '../../testing/ActivatedRouteStub';
import { ActivatedRoute } from '@angular/router';
import { PagesComponent } from '../pages/pages.component';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MockItemComponent } from '../../testing/MockItemComponent';

class TopStoriesServiceMock {

  getTopStories(type): Observable<Array<number>> {
    return of([101, 102, 103]);
  }
}

describe('TopStoriesComponent', () => {
  let component: TopStoriesComponent;
  let fixture: ComponentFixture<TopStoriesComponent>;
  const activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub({ path: 'topStories'}, { page: '0'});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStoriesComponent, PagesComponent, MockItemComponent ],
      providers: [
         { provide: TopStoriesService, useClass: TopStoriesServiceMock },
         { provide: ActivatedRoute, useValue: activatedRouteStub }
      ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
