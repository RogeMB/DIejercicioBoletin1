import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './modules/material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FormsModule } from '@angular/forms';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';

@NgModule({
  declarations: [ 
    AppComponent,
    FilmListComponent,
    PeopleListComponent,
    SpeciesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
