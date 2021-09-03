import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { delay, map } from 'rxjs/operators';

export interface Blog
{
  id: number,
  title: string,
  body: string,
  userId: number
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {

  }

  blogs() {
    return this.http.get<Blog[]>(environment.endpoint + '/posts');
  }

  latestBlogs() {
    return this.blogs().pipe(
      map(blogs => {
        return blogs.slice(0, 3);
      })
    );
  }

  blog(id: number) {
    return this.http.get<Blog>(environment.endpoint + '/posts/' + id)
      .pipe(
        delay(2000)
      )
  }
}
