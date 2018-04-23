import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: User;
  showSubmissions = false;
  currentPage;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const userName = this.route.snapshot.paramMap.get('username');
    this.userService.getUser(userName)
      .subscribe(user => this.user = user);

      this.route.queryParams
    .subscribe(params => {
      this.currentPage = +params['page'] || 0;
    });

    const storyType = this.route.snapshot.routeConfig.path;
  }

  toggleSubmissions() {
    this.showSubmissions = !this.showSubmissions;
  }
}
