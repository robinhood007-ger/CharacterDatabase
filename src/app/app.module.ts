import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DanganronpaComponent } from './danganronpa/danganronpa.component';
import { DanganronpaDetailComponent } from './danganronpa-detail/danganronpa-detail.component';
import { HomeComponent } from './home/home.component';
import { MagicTypesComponent } from './magic-types/magic-types.component';
import { IanverseWorldComponent } from './ianverse-world/ianverse-world.component';
import { MagicTypesDetailComponent } from './magic-types-detail/magic-types-detail.component';
import { IanverseWorldDetailComponent } from './ianverse-world-detail/ianverse-world-detail.component';
import { SubmitnewComponent } from './submitnew/submitnew.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VerifiedDetailsComponent } from './verified-details/verified-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DanganronpaComponent,
    DanganronpaDetailComponent,
    HomeComponent,
    MagicTypesComponent,
    IanverseWorldComponent,
    MagicTypesDetailComponent,
    IanverseWorldDetailComponent,
    SubmitnewComponent,
    VerifiedDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
