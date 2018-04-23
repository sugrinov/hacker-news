import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';

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
      .map(story => {
        const urlText = story.url && story.url.match(/https?:\/\/(.?.\w+\.\w+)/i)[1];
        return ({
          ...story,
          urlText
        });
      })
      .subscribe(item => this.story = item);
  }
}

