import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LeftContRightImageComponent } from './left-cont-right-image/left-cont-right-image.component';
import { ParticlesComponent } from './pages/home/particles/particles.component';
import { ParticlesModule } from 'angular-particle';
import { Routes, RouterModule, Router, ROUTES} from '@angular/router';
import { TechnologiesComponent } from './pages/home/technologies/technologies.component';
import { TalkToUsComponent } from './pages/home/talk-to-us/talk-to-us.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { NewsBlogComponent } from './pages/home/news-blog/news-blog.component';
import { Home2Component } from './pages/home2/home2.component';
import {LocationStrategy, Location, PathLocationStrategy} from '@angular/common';
import { Home3Component } from './pages/home3/home3.component';
import { Home4Component } from './pages/home4/home4.component';
import { Home2bComponent } from './pages/home2b/home2b.component';
import { Home2cComponent } from './pages/home2c/home2c.component';
import { Home2dComponent } from './pages/home2d/home2d.component';
import { Home2eComponent } from './pages/home2e/home2e.component';
import { Home2fComponent } from './pages/home2f/home2f.component';
import { SharedServicesComponent } from './pages/shared-services/shared-services.component';
import { SharedModule } from './shared/shared.module';
import { NewsComponent } from './pages/news/news.component';
import { BlogComponent } from './pages/news/blog/blog.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { Home2gComponent } from './pages/home2g/home2g.component';
import { Home2hComponent } from './pages/home2h/home2h.component';
// const routes: Routes =[];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftContRightImageComponent,
    ParticlesComponent,
    TechnologiesComponent,
    TalkToUsComponent,
    ServicesComponent,
    NewsBlogComponent,
    Home2Component,
    Home3Component,
    Home4Component,
    Home2bComponent,
    Home2cComponent,
    Home2dComponent,
    Home2eComponent,
    Home2fComponent,
    SharedServicesComponent,
    NewsComponent,
    BlogComponent,
    TechnologyComponent,
    Home2gComponent,
    Home2hComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    SharedModule,
    // RouterModule.forRoot(routes,{useHash:false})
    // RouterModule.forRoot(Routes, {useHash: true})
  ],
  // providers: [],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
