import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts() : Observable<Post[]> {
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getPostById(id: string) : Observable<Post> {
    return this.httpClient.get<Post>("https://jsonplaceholder.typicode.com/posts/" + id);
  }

}
