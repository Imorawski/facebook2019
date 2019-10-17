import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../../shared/interfaces/post.interface';
import { IComment } from '../../../shared/interfaces/comment.interface';

@Component({
    selector: 'app-comment-panel',
    templateUrl: './comment-panel.component.html',
    styleUrls: ['./comment-panel.component.scss']
})
export class CommentPanelComponent implements OnInit {

    @Input() post: IPost = null;

    constructor() { }

    ngOnInit() {
    }

    onAddComment(comment: IComment) {
        // console.log('onAddComment', comment);
        this.post.comments.push(comment);
    }

}
