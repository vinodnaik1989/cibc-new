import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router, NavigationEnd} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SharedServicesComponent} from './pages/shared-services/shared-services.component';
import {NewsComponent} from './pages/news/news.component';
import {TechnologyComponent} from './pages/technology/technology.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/' },
  {path: '', component: HomeComponent},
  // {path: '',redirectTo:'',pathMatch:'full'},
  {path: 'shared-services', component: SharedServicesComponent},
  {path: 'news', component: NewsComponent},
  {path: 'technology', component: TechnologyComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
