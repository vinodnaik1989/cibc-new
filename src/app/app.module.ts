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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LeftContRightImageComponent,
    ParticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    // RouterModule.forRoot(Routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
