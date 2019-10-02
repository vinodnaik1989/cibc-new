import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LeftContRightImageComponent } from './left-cont-right-image/left-cont-right-image.component';
import { ParticlesComponent } from './home/particles/particles.component';
import { ParticlesModule } from 'angular-particle';
import { Routes, RouterModule, Router, ROUTES} from '@angular/router';
import { TechnologiesComponent } from './home/technologies/technologies.component';
import { TalkToUsComponent } from './home/talk-to-us/talk-to-us.component';
import { ServicesComponent } from './home/services/services.component';
import { FooterComponent } from './footer/footer.component';
import { NewsBlogComponent } from './home/news-blog/news-blog.component';
import { Home2Component } from './home2/home2.component';
import {LocationStrategy, Location, PathLocationStrategy} from '@angular/common';

// const routes: Routes =[];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LeftContRightImageComponent,
    ParticlesComponent,
    TechnologiesComponent,
    TalkToUsComponent,
    ServicesComponent,
    FooterComponent,
    NewsBlogComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    // RouterModule.forRoot(routes,{useHash:false})
    // RouterModule.forRoot(Routes, {useHash: true})
  ],
  // providers: [],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
