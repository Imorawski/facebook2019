import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../../posts/services/posts.service';
import { IPostList } from '../../../shared/interfaces/post-list.interface';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    posts: IPostList = null;
    error = null;

    constructor(
        private postsService: PostsService
    ) { }

    ngOnInit() {
        this.setupPosts();
    }

    private async setupPosts() {
        try {
            this.posts = await this.postsService.getPosts();
            this.error = null;
            // throw new Error('ciasteczko mi nie smakowało');
        } catch (reason) {
            this.posts = [];
            this.error = reason;
            // if (localStorage.admin) {
            //     this.error = reason;
            // } else {
            //     this.error = { message: reason.message };
            // }
            // console.log(reason);
        }
    }

}
