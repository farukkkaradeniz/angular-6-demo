import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
})
export class PostComponent implements OnInit {

  constructor(private postService:PostService,private router:Router,private route:ActivatedRoute) { }
  post:Post= new Post();
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.getPostDetail(params['postId']);
    })
  }

  getPostDetail(postId){
    console.log(postId);
    this.postService.getPostDetail(postId).subscribe(response=>{
      this.post = response;
    })
  }

}
