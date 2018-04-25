import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { TopStory } from '../top-stories/top-story';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() itemId: number;
  @Input() showStoryText = false;
  @Input() showStoryComments = false;

  story;

  constructor(
    private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.fetchItem(this.itemId)
      .map((story: TopStory) => {
        const constructedURL = story.url && new URL(story.url);
        const urlText = constructedURL && constructedURL.hostname.replace('www.', '');
        return ({
          ...story,
          urlText
        });
      })
      .subscribe((item: TopStory) => this.story = item);
  }
}

