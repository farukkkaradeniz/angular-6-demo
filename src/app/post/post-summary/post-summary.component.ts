import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Pager } from '../../app-pager';
import { PostSummaryService } from './post-summary.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.css'],
  providers:[PostSummaryService]
})
export class PostSummaryComponent implements OnInit {

  constructor(private postSummaryService:PostSummaryService,private router:Router, private route:ActivatedRoute) { }

  postSummary:Post[];
  pager:Pager= new Pager();

  ngOnInit() {
    this.getPostSummary();
  }

  getPostSummary(){
    this.postSummaryService.getAllPosts().subscribe(response=>{
      this.postSummary = response;
      this.pager = this.getPager(this.postSummary.length);
    });
  }

  getPager(totalItems:number,currentPage:number=1,pageSize:number=5):Pager{
    let totalPages = Math.ceil(totalItems/pageSize);
    if(totalPages === 0) totalPages = 1;
    let pages:Array<number>=[];
    for(let i = 1;i<=totalPages;i++){
      pages.push(i);
    }
    var pager = new Pager();
    pager.totalPages = totalPages;
    pager.currentPage = currentPage;
    pager.pageList = pages;
    pager.pageSize = pageSize;
    return pager;
  }

  setPage(page:number){
    this.pager.currentPage = page;
  }

  getPostDetail(post:Post){
    this.router.navigate(['/post-detail',post.postId]);
  }

}
