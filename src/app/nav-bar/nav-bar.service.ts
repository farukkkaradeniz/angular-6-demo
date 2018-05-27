import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavContent } from './navContent';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor(private http:HttpClient,@Inject("apiUrl") private apiUrl) { }

  public getAllMenuElements(){
    return this.http.get<NavContent[]>(this.apiUrl + "/menu");
  }
}
