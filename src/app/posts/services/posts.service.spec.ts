import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { PostsService } from './posts.service';

describe('PostsService', () => {
    let service: PostsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });

        service = TestBed.get(PostsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    xit('should make HTTP request', async () => {
        const request = service.getPosts();
        httpMock.expectOne('assets/fake-posts.json');
        await request;
        expect(() => httpMock.verify()).not.toThrow();
    });
});
