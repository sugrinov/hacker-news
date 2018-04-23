import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonStoriesComponent } from './common-stories.component';

describe('CommonStoriesComponent', () => {
  let component: CommonStoriesComponent;
  let fixture: ComponentFixture<CommonStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonStoriesComponent ]
    })
    .compileComponents();
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
