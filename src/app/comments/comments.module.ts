import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentListItemComponent } from './components/comment-list-item/comment-list-item.component';
import { CommentAddFormComponent } from './components/comment-add-form/comment-add-form.component';
import { CommentPanelComponent } from './components/comment-panel/comment-panel.component';

@NgModule({
    declarations: [
        CommentListComponent,
        CommentListItemComponent,
        CommentAddFormComponent,
        CommentPanelComponent
    ],
    exports: [
        CommentListComponent,
        CommentListItemComponent,
        CommentAddFormComponent,
        CommentPanelComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class CommentsModule { }
