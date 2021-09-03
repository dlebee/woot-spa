import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListPageComponent } from './pages/blog-list-page/blog-list-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListPageComponent
  },
  {
    path: ':id/:title',
    component: BlogPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
