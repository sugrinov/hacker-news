import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { Comment } from './comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() commentID: number;

  shouldShowChildComments = false;
  comment: Comment;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComment(this.commentID)
        .subscribe((comment: Comment) => this.comment = comment);
  }

  showChildComments() {
    this.shouldShowChildComments = true;
  }
}
