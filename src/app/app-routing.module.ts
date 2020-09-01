import { VerifiedDetailsComponent } from './verified-details/verified-details.component';
import { SubmitnewComponent } from './submitnew/submitnew.component';
import { IanverseWorldDetailComponent } from './ianverse-world-detail/ianverse-world-detail.component';
import { IanverseWorldComponent } from './ianverse-world/ianverse-world.component';
import { MagicTypesDetailComponent } from './magic-types-detail/magic-types-detail.component';
import { MagicTypesComponent } from './magic-types/magic-types.component';
import { DanganronpaDetailComponent } from './danganronpa-detail/danganronpa-detail.component';
import { DanganronpaComponent } from './danganronpa/danganronpa.component';
import { HomeComponent } from './home/home.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Ianverse', component: HeroesComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'details/:name', component: HeroDetailComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Danganronpa', component: DanganronpaComponent },
  { path: 'Dangandetails/:name', component: DanganronpaDetailComponent },
  { path: 'MagicTypes', component: MagicTypesComponent },
  { path: 'Magictypedetails/:name', component: MagicTypesDetailComponent },
  { path: 'IanverseWorld', component: IanverseWorldComponent },
  {
    path: 'IanverseWorldDetails/:name',
    component: IanverseWorldDetailComponent,
  },
  { path: 'SubmitNewCharacter', component: SubmitnewComponent },
  { path: 'VerifiedCharacters/:id', component: VerifiedDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
