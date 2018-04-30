import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CommonStoriesComponent } from './common-stories.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppPage } from '../../../e2e/app.po';
import { PagesComponent } from '../pages/pages.component';
import { ItemComponent } from '../item/item.component';
import { MomentModule } from 'angular2-moment';
import { Component, Input } from '@angular/core';
import { CommonStoriesService } from '../common-stories.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CommentsComponent } from '../comments/comments.component';
import { ActivatedRouteStub } from '../../testing/ActivatedRouteStub';
import { ActivatedRoute } from '@angular/router';
import { MockItemComponent } from '../../testing/MockItemComponent';

class CommonStoriesServiceMock {

  getCommonStories(type): Observable<Array<number>> {
    return of([101, 102, 103]);
  }
}

describe('CommonStoriesComponent', () => {
  let component: CommonStoriesComponent;
  let fixture: ComponentFixture<CommonStoriesComponent>;
  const activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub({ path: 'askStories'}, { page: '0'});


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonStoriesComponent, PagesComponent, MockItemComponent ],
      providers: [
        { provide: CommonStoriesService, useClass: CommonStoriesServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    // activatedRouteStub.setRouteConfig({ path: 'askStorsies'});
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
