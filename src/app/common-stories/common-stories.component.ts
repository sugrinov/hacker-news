import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommonStoriesService } from '../common-stories.service';
import { RESULTS_PER_PAGE } from '../constants/constants';

@Component({
  selector: 'app-common-stories',
  templateUrl: './common-stories.component.html',
  styleUrls: ['./common-stories.component.css']
})
export class CommonStoriesComponent implements OnInit {

  stories: Object;
  currentPage: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private commonStoriesService: CommonStoriesService
  ) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.currentPage = +params['page'] || 0;
    });

    const storyType = this.route.snapshot.routeConfig.path;
    this.commonStoriesService.getCommonStories(storyType)
      .map((allStories: number[]) => {
        const commonStoriesPageView = allStories.reduce((acc, curr, idx) => {
          const currentPage = Math.floor(idx / RESULTS_PER_PAGE);
          const currentStories = acc[currentPage] ? acc[currentPage]  : [];
          currentStories.push(curr);
          return {
            ...acc,
            [currentPage]: currentStories
          };
        }, {});
        return commonStoriesPageView;
      })
      .subscribe((stories: Object) => this.stories = stories);
  }

  getCommonStoriesValues(): number[] {
    return this.stories ? this.stories[this.currentPage] : [];
  }

  getPages(): string[] {
    return Object.keys(this.stories);
  }
}
