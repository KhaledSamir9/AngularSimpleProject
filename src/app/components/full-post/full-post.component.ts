import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css'],
})
export class FullPostComponent implements OnInit {

  post: Post = {
    id: 0,
    userId: 0,
    title: "",
    body: ""
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let postId = params.get('id');
      if (postId != null) {
        this.postService.getPostById(postId).subscribe((resp) => {
          this.post = resp;
        });
      }
    });
  }
}
