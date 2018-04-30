import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-item',
  template: ''
})
export class MockItemComponent {
  @Input()
  itemId;

  @Input()
  showStoryText = false;

  @Input()
  showStoryComments = false;

}
