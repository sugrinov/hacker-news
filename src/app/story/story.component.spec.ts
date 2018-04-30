import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryComponent } from './story.component';
import { ActivatedRouteStub } from '../../testing/ActivatedRouteStub';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MomentModule } from 'angular2-moment';
import { Input, Component } from '@angular/core';
import { MockItemComponent } from '../../testing/MockItemComponent';

describe('StoryComponent', () => {
  let component: StoryComponent;
  let fixture: ComponentFixture<StoryComponent>;
  const activatedRouteStub: ActivatedRouteStub = new ActivatedRouteStub({ path: 'story' }, { id: '0' });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryComponent, MockItemComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryComponent);
    component = fixture.componentInstance;
    component.storyID = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
