import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPostList } from '../../shared/interfaces/post-list.interface';
import { sorter } from '../../shared/helpers/sorter.helper';
import { IPost } from '../../shared/interfaces/post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(
        private http: HttpClient
    ) { }

    getPosts() {
        const url = environment.postsUrl;
        return this.http.get<IPostList>(url)
            .pipe(
                sorter((post: IPost) => new Date(post.createdTime))
            )
            .toPromise();
    }

    async getPostById(postId: string): Promise<IPost> {
        // Pobierz wszystkie posty
        const posts = await this.getPosts();

        // Przefiltruj posty pod kątem postId
        const post = posts.find((post) => {
            return (post.id === postId);
        });

        return post;
    }

}
