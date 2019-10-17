import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentListItemComponent } from './components/comment-list-item/comment-list-item.component';



@NgModule({
  declarations: [CommentListComponent, CommentListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CommentListComponent, CommentListItemComponent]})
export class CommentsModule { }
