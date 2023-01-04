import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent {

  @Input() post: Post = {
    id: 0,
    userId: 0,
    title: "",
    body: ""
  };

}
