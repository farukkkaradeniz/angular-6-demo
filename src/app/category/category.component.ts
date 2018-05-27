import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryList } from './category-list.mock';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  categoryList:Category[];

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categoryList = CategoryList;
  }
}
