import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationEnd } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Home2Component } from './pages/home2/home2.component';
import { Home2bComponent } from './pages/home2b/home2b.component';
import { Home2cComponent } from './pages/home2c/home2c.component';
import { Home2dComponent } from './pages/home2d/home2d.component';
import { Home2eComponent } from './pages/home2e/home2e.component';
import { Home2fComponent } from './pages/home2f/home2f.component';
import { Home3Component } from './pages/home3/home3.component';
import { Home4Component } from './pages/home4/home4.component';
import { SharedServicesComponent } from './pages/shared-services/shared-services.component';
import { NewsComponent } from './pages/news/news.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { Home2gComponent } from './pages/home2g/home2g.component';
import { Home2hComponent } from './pages/home2h/home2h.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/' },
  {path: '',component: Home2hComponent},
  // {path: '',redirectTo:'',pathMatch:'full'},
  {path: 'home2',component: Home2Component},
  {path: 'home2b',component: Home2bComponent},
  {path: 'home2c',component: Home2cComponent},
  {path: 'home2d',component: Home2dComponent},
  {path: 'home2e',component: Home2eComponent},
  // {path: 'home2f',component: Home2fComponent},
  {path: 'home3',component: Home3Component},
  {path: 'home4',component: Home4Component},
  {path: 'shared-services',component: SharedServicesComponent},
  {path: 'news', component: NewsComponent},
  {path: 'technology', component: TechnologyComponent},
  {path: 'home2g', component: Home2gComponent},
  {path: 'home2h', component: Home2hComponent},
  {path: "**",redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:false,
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
