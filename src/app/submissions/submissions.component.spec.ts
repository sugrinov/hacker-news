import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsComponent } from './submissions.component';
import { Component, Input } from '@angular/core';
import { MockItemComponent } from '../../testing/MockItemComponent';

describe('SubmissionsComponent', () => {
  let component: SubmissionsComponent;
  let fixture: ComponentFixture<SubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionsComponent, MockItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
