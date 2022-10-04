import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { FormsModule } from '@angular/forms';
import { TableAlumnosComponent } from './components/table-alumnos/table-alumnos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableAlumnosComponent
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
