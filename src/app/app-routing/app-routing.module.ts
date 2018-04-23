import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopStoriesComponent } from '../top-stories/top-stories.component';
import { CommonStoriesComponent } from '../common-stories/common-stories.component';
import { StoryComponent } from '../story/story.component';
import { UserInfoComponent } from '../user-info/user-info.component';

const routes = [
  { path: 'home', component: TopStoriesComponent },
  { path: 'askStories', component: CommonStoriesComponent },
  { path: 'showStories', component: CommonStoriesComponent },
  { path: 'jobStories', component: CommonStoriesComponent },
  { path: 'newStories', component: CommonStoriesComponent },
  { path: 'bestStories', component: CommonStoriesComponent },
  { path: 'story/:id', component: StoryComponent },
  { path: 'user/:username', component: UserInfoComponent },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
