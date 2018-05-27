import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient,@Inject("apiUrl") private apiUrl) { }

  public getAllCategories(){
    return this.http.get<Category[]>(this.apiUrl + "/category");
  }

}
