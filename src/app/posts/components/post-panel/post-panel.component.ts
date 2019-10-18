import { Component, OnInit, Input } from '@angular/core';

import { IPostList } from '../../../shared/interfaces/post-list.interface';
import { IPost } from '../../../shared/interfaces/post.interface';

@Component({
    selector: 'app-post-panel',
    templateUrl: './post-panel.component.html',
    styleUrls: ['./post-panel.component.scss']
})
export class PostPanelComponent implements OnInit {

    @Input() posts: IPostList = null;

    constructor() { }

    ngOnInit() {
    }

    addPost(post: IPost) {
        // console.log('addPost', post);
        this.posts.unshift(post);
    }

}
