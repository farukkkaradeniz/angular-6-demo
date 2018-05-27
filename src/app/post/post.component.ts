import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
})
export class PostComponent implements OnInit {

  constructor(private postService:PostService) { }
  post:Post;
  ngOnInit() {
    this.getPostDetail();
  }

  getPostDetail(){
    this.postService.getPostDetail(32).subscribe(response=>{
      this.post = response;
    })
  }

}
