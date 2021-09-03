import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog, BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  latestBlogs$: Observable<Blog[]>;
  
  constructor(blogService: BlogService) {
    this.latestBlogs$ = blogService.latestBlogs();
  }

  ngOnInit(): void {
    
  }

}
