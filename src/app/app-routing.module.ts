import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { AboutComponent }      from './about/about.component';
import { CreditsComponent }      from './credits/credits.component';
import { FotosComponent }      from './fotos/fotos.component';
import { GaleriaComponent }      from './galeria/galeria.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'difusion', component: FotosComponent },
  { path: 'galeria', component: GaleriaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
