import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule } from './posts-routing.module';



@NgModule({
  declarations: [ PostListComponent
                 ,PostListItemComponent],
  exports: [ PostListComponent
            ,PostListItemComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
