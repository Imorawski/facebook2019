import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { SharedModule } from '../../../shared/shared.module';

describe('PostListComponent', () => {
    let component: PostListComponent;
    let fixture: ComponentFixture<PostListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PostListComponent,
                PostListItemComponent,
            ],
            imports: [
                SharedModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PostListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
