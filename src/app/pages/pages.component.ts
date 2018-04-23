import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RESULTS_PER_PAGE } from '../constants/constants';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  @Input() currentPage: number;
  _pages: number[];

  @Input()
  set pages(_pages: any[]) {
    this._pages = _pages.map(page => Number(page));
  }

  get pages(): any[] { return this._pages; }

  isMobile = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (window.innerWidth < 800) {
      this.isMobile = true;
    }
    this.pages = this.pages.map(page => Number(page));
  }

  getNext() {
    this.router.navigate([this.route.snapshot.routeConfig.path], { queryParams: { page: this.currentPage + 1 } });
  }

  getPrevious() {
    this.router.navigate([this.route.snapshot.routeConfig.path], { queryParams: { page: this.currentPage - 1 } });
  }

  getPages() {
    if (this.pages.length <= 10) {
      return this.pages;
    }
    const maxPage = this.pages[this.pages.length - 1];
    const pagesLeft = maxPage - this.currentPage;

    const pageCloseToLast = pagesLeft <= 10;
    const lastIdx = pageCloseToLast ? maxPage : this.currentPage + 9;

    let firstIdx = this.currentPage === 0 ? 0 : this.currentPage - 1;
    firstIdx = pageCloseToLast ? (lastIdx - 11) : firstIdx;
    return this.pages.slice(firstIdx, lastIdx + 1);
  }

  goToPage(page) {
    this.router.navigate([this.route.snapshot.routeConfig.path], { queryParams: { page } });
  }

}
