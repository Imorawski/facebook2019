import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { IPost } from '../../../shared/interfaces/post.interface';
import { ICommentList } from '../../../shared/interfaces/comment-list.interface';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListItemComponent implements OnInit, OnChanges {

    @Input() post: IPost = null;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges() {
         if (this.post) {
             this.post.comments = [
                // { body: 'asd', author: { avatarUrl: 'https://piecioshka.pl/me.jpg' } }
             ] as ICommentList;
         }
    }

    getPostUrl() {
        console.log('getPostUrl');
        return `/posts/${ this.post.id }`
    }

}
