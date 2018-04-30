import { Component, OnInit, Input } from '@angular/core';
import { RESULTS_PER_PAGE } from '../constants/constants';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  @Input() submissions = [];

  currentPage = 0;
  noNext = false;
  noPrev = true;
  constructor() { }

  ngOnInit() {
    this.submissions = this.submissions
      .reduce((acc, curr, idx) => {
          const currentPage = Math.floor(idx / RESULTS_PER_PAGE);
          const currentSubmissions = acc[currentPage] ? acc[currentPage]  : [];
          currentSubmissions.push(curr);
          return {
            ...acc,
            [currentPage]: currentSubmissions
          };
    }, {});
  }

  getNext(): number[] {
    this.currentPage++;

    if (!this.hasNext()) {
      this.noNext = true;
    }

    if (this.hasPrev()) {
      this.noPrev = false;
    }

    return this.submissions[this.currentPage];
  }

  getPrev(): number[] {
    this.currentPage--;

    if (!this.hasPrev()) {
      this.noPrev = true;
    }

    if (this.hasNext()) {
      this.noNext = false;
    }

    return this.submissions[this.currentPage];
  }

  hasNext(): boolean {
    return !!this.submissions[this.currentPage + 1];
  }

  hasPrev(): boolean {
    return !!this.submissions[this.currentPage - 1];
  }
}
