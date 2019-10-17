import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../shared/interfaces/post.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
    selector: 'app-post-profile-page',
    templateUrl: './post-profile-page.component.html',
    styleUrls: ['./post-profile-page.component.scss']
})
export class PostProfilePageComponent implements OnInit {

    post: IPost = null

    constructor(
        private route: ActivatedRoute,
        private postsService: PostsService,
        private router: Router
    ) { }

    ngOnInit() {
        this.setupPost();
    }

    private async setupPost() {
        // Wyciągnij postId z URL
        const postId = this.route.snapshot.params.postIdXXXXX;

        // Pobierz dane posta
        const post = await this.postsService.getPostById(postId);

        // Ustaw this.post na wynik filtrowania
        if (post) {
            this.post = post;
        } else {
            // Przekierowanie na stronę 404
            this.router.navigateByUrl('/post-not-found');
        }
    }

}
