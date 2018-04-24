import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  storyID: number;
  story: Object;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.storyID = +this.route.snapshot.paramMap.get('id');
  }
}
