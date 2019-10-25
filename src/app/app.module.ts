import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LeftContRightImageComponent } from './pages/home/left-cont-right-image/left-cont-right-image.component';
import { ParticlesComponent } from './pages/home/particles/particles.component';
import { ParticlesModule } from 'angular-particle';
import { Routes, RouterModule, Router, ROUTES} from '@angular/router';
import { TechnologiesComponent } from './pages/home/technologies/technologies.component';
import { TalkToUsComponent } from './pages/home/talk-to-us/talk-to-us.component';
import { ServicesComponent } from './pages/home/services/services.component';
import { NewsBlogComponent } from './pages/home/news-blog/news-blog.component';
import {LocationStrategy, Location, PathLocationStrategy} from '@angular/common';
import { SharedServicesComponent } from './pages/shared-services/shared-services.component';
import { SharedModule } from './shared/shared.module';
import { NewsComponent } from './pages/news/news.component';
import { BlogComponent } from './pages/news/blog/blog.component';
import { TechnologyComponent } from './pages/technology/technology.component';
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
    SharedServicesComponent,
    NewsComponent,
    BlogComponent,
    TechnologyComponent,
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
