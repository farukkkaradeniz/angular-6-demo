import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostSummaryComponent } from './post/post-summary/post-summary.component';
import { CategoryComponent } from './category/category.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

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
    HttpClientModule
  ],
  providers: [
    { provide: "apiUrl", useValue: "http://localhost:8080/api" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
