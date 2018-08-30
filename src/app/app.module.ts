import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import {AppRoutes} from './app.routes';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NavBarComponent,
    AddNoteComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
