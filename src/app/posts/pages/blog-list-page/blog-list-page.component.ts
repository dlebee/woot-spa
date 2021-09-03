import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog, BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list-page',
  templateUrl: './blog-list-page.component.html',
  styleUrls: ['./blog-list-page.component.scss']
})
export class BlogListPageComponent implements OnInit {
  blogs$: Observable<Blog[]>;

  constructor(blogService: BlogService) {
    this.blogs$ = blogService.blogs();
   }

  ngOnInit(): void {
  }

}
