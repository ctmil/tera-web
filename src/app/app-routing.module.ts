import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './home/home.component';
import { AboutComponent }      from './about/about.component';
import { CreditsComponent }      from './credits/credits.component';
import { FotosComponent }      from './fotos/fotos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'fotos', component: FotosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
