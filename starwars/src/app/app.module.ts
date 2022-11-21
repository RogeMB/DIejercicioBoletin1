import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { MenuComponent } from './menu/menu.component';
import { ImportsMaterialModule } from './modules/material-imports.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ 
    AppComponent,
    FilmListComponent,
    PeopleListComponent,
    SpeciesListComponent,
    MenuComponent
  ],
  imports: [
    ImportsMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
