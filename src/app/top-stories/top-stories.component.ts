import { Component, OnInit } from '@angular/core';
import { TOP_STORIES } from './top-stories-mock';
import { TopStoriesService } from '../top-stories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { RESULTS_PER_PAGE } from '../constants/constants';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {

  topStories: Object;
  currentPage: number;

  constructor(
    private topStoriesService: TopStoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.currentPage = +params['page'] || 0;
    });


    this.topStoriesService.getTopStories()
      .map(allStories => {
        const pages = allStories.length / RESULTS_PER_PAGE;

        const topStoriesPageView = allStories.reduce((acc, curr, idx) => {
          const currentPage = Math.floor(idx / RESULTS_PER_PAGE);
          const currentStories = acc[currentPage] ? acc[currentPage]  : [];
          currentStories.push(curr);
          return {
            ...acc,
            [currentPage]: currentStories
          };
        }, {});
        return topStoriesPageView;
      })
      .subscribe(topStories => this.topStories = topStories);
  }

  getTopStoriesValues() {
    return this.topStories ? this.topStories[this.currentPage] : [];
  }

  getPages() {
    return Object.keys(this.topStories);
  }
}
