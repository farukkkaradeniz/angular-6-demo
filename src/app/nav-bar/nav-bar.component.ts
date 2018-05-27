import { Component, OnInit } from '@angular/core';
import { NavContent } from './navContent';
import { NavContentList } from './navContent-list.mock';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  navBarContentList:NavContent[];

  ngOnInit() {
    this.getNavBarItems();
  }

  getNavBarItems(){
    this.navBarContentList = NavContentList;
  }

}
