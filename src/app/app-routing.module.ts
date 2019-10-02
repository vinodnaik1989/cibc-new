import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  // {path: '',redirectTo:'',pathMatch:'full'},
  {path: 'home2',component: Home2Component},
  {path: "**",redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
