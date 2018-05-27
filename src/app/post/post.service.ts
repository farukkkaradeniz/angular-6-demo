import { Injectable, Inject } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient,@Inject("apiUrl") private apiUrl) { }

  public getPostDetail(postId:Number){
    return this.http.get<Post>(this.apiUrl + "/post/" + postId);
  }
}
