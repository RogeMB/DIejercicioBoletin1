import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'characters', component: PeopleListComponent},
  {path: 'films', component: FilmListComponent},
  {path: 'species', component: SpeciesListComponent},

  {path: '', redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
