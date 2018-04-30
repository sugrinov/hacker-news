import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { MomentModule } from 'angular2-moment';
import { CommentsComponent } from '../comments/comments.component';
import { Component, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { Observable } from 'rxjs/Observable';
import { TopStory } from '../top-stories/top-story';
import { of } from 'rxjs/observable/of';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-comments', template: ''
})
class MockCommentComponent {
  @Input() commentID;
}

class ItemServiceMock {
  fetchItem(id): Observable<TopStory> {
    return of({
      by: 'user',
      descendants: 0,
      id: 1,
      kids: [],
      score: 1,
      time: 123,
      title: 'title',
      type: 'type',
      url: 'http://www.url.com'
    });
  }
}

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let itemService: jasmine.SpyObj<ItemService>;

  beforeEach(async(() => {
    itemService = jasmine.createSpyObj('ItemService', ['fetchItem']);
    TestBed.configureTestingModule({
      declarations: [ ItemComponent, MockCommentComponent ],
      imports: [ MomentModule, RouterTestingModule ],
      providers: [{ provide: ItemService, useClass: ItemServiceMock } ]
    })
    .compileComponents();

    itemService.fetchItem.and.returnValue({});
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
