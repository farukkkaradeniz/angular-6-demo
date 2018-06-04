import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostSummaryComponent } from './post/post-summary/post-summary.component';
import { CategoryComponent } from './category/category.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes:Routes = [
  {
    path:'',
    redirectTo:'post-summary',
    pathMatch:'full'
  },
  {
    path:'post-summary',
    component:PostSummaryComponent
  },
  {
    path:'post-detail/:postId',
    component:PostComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostSummaryComponent,
    CategoryComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule
  ],
  exports:[
    RouterModule
  ],
  providers: [
    { provide: "apiUrl", useValue: "http://localhost:8080/api" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
