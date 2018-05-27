import { Component, OnInit } from '@angular/core';
import { NavContent } from './navContent';
import { NavContentList } from './navContent-list.mock';
import { NavBarService } from './nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers:[NavBarService]
})
export class NavBarComponent implements OnInit {

  constructor(private navBarService:NavBarService) { }

  navBarContentList:NavContent[];

  ngOnInit() {
    this.getNavBarItems();
  }

  getNavBarItems(){
    this.navBarService.getAllMenuElements().subscribe(response=>{
      this.navBarContentList = response;
    });
  }

}
