import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { BlogListPageComponent } from './pages/blog-list-page/blog-list-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BlogListPageComponent,
    BlogPageComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
