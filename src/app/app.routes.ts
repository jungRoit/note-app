import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotesComponent} from './notes/notes.component';
import {AddNoteComponent} from './notes/add-note/add-note.component';
import {EditNoteComponent} from './notes/edit-note/edit-note.component';


const appRoutes : Routes =[
    {path:"", component:NotesComponent},
    {path:"addNotes", component:AddNoteComponent},
    {path:"editNotes/:id", component:EditNoteComponent}
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(appRoutes)
        ],
        exports: [
            RouterModule
        ]
    }
)
export class AppRoutes{}