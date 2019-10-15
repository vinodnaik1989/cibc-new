import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  {path: '',component: HomeComponent},
  // {path: '',redirectTo:'',pathMatch:'full'},
  {path: 'home2',component: Home2Component},
  {path: 'home3',component: Home3Component},
  {path: 'home4',component: Home4Component},
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
export class AppRoutingModule { }
