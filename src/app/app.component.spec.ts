import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { ErrorHandlingService } from './error-handling.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { CommonStoriesComponent } from './common-stories/common-stories.component';
import { ItemComponent } from './item/item.component';
import { PagesComponent } from './pages/pages.component';
import { CommentsComponent } from './comments/comments.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { StoryComponent } from './story/story.component';
import { MomentModule } from 'angular2-moment';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TopStoriesComponent,
        ItemComponent,
        CommonStoriesComponent,
        PagesComponent,
        CommentsComponent,
        UserInfoComponent,
        SubmissionsComponent,
        StoryComponent
      ],
      imports: [  AppRoutingModule, ToasterModule, MomentModule ],
      providers: [
        ToasterService,
        ErrorHandlingService,
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
