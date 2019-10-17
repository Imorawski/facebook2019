import { Component, OnInit, Input } from '@angular/core';

import { IPost } from '../../../shared/interfaces/post.interface';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() post: IPost = null;

    constructor() { }

    ngOnInit() {
    }

}
