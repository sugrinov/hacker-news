import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { TopStoriesService } from './top-stories.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item.service';
import { CommonStoriesComponent } from './common-stories/common-stories.component';
import { CommonStoriesService } from './common-stories.service';
import { PagesComponent } from './pages/pages.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentService } from './comment.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserService } from './user.service';
import { SubmissionsComponent } from './submissions/submissions.component';
import { ErrorHandlingService } from './error-handling.service';


@NgModule({
  declarations: [
    AppComponent,
    TopStoriesComponent,
    ItemComponent,
    CommonStoriesComponent,
    PagesComponent,
    CommentsComponent,
    UserInfoComponent,
    SubmissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [
    TopStoriesService,
    CommonStoriesService,
    ItemService,
    CommentService,
    UserService,
    ErrorHandlingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
