import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog, BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  blog$?: Observable<Blog>;
  blogId?: number;

  constructor(private blogService: BlogService, 
    private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogId = params.id;
      this.blog$ = this.blogService.blog(this.blogId!);
    });
  }

}
