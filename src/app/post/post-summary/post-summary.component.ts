import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostList } from '../post-list.mock';
import { Pager } from '../../app-pager';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.css']
})
export class PostSummaryComponent implements OnInit {

  constructor() { }

  postSummary:Post[];
  pager:Pager;

  ngOnInit() {
    this.getPostSummary();
  }

  getPostSummary(){
    this.postSummary = PostList;
    this.pager = this.getPager(this.postSummary.length);
  }

  getPager(totalItems:number,currentPage:number=1,pageSize:number=5):Pager{
    let totalPages = Math.ceil(totalItems/pageSize);
    let pages:Array<number>=[];
    for(let i = 1;i<totalPages;i++){
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

}
