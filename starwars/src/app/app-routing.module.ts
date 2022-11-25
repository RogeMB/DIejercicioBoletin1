import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { FilmsComponent } from './components/films/films.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { SpeciesComponent } from './components/species/species.component';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'species', component: SpeciesComponent},

  {path: '', redirectTo: '/menu', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
