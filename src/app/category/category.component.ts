import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryList } from './category-list.mock';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  categoryList:Category[];

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getAllCategories().subscribe(response=>{
      this.categoryList = response;
    });
  }
}
