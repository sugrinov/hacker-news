import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() commentID: number;

  shouldShowChildComments = false;
  comment: Object;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComment(this.commentID)
        .subscribe(comment => this.comment = comment);
  }

  showChildComments() {
    this.shouldShowChildComments = true;
  }
}
