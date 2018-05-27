import { Injectable, Inject } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostSummaryService {

  constructor(private http:HttpClient,@Inject("apiUrl") private apiUrl) { }

  public getAllPosts(){
    return this.http.get<Post[]>(this.apiUrl + "/post");
  }
}
