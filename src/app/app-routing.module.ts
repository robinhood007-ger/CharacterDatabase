import { DanganronpaDetailComponent } from './danganronpa-detail/danganronpa-detail.component';
import { DanganronpaComponent } from './danganronpa/danganronpa.component';
import { HomeComponent } from './home/home.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'Ianverse', component: HeroesComponent},
  {path: '', redirectTo:'/Home', pathMatch:'full'},
  {path: 'details/:name', component: HeroDetailComponent},
  {path: 'Home', component:HomeComponent},
  {path: 'Danganronpa', component:DanganronpaComponent},
  {path: 'Dangandetails/:name', component:DanganronpaDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
