import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-note',
  providers: [NotesService],
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
note;
  constructor(private notesService:NotesService, private router:Router) { }

  ngOnInit() {
  }

  addNote(title,body){
    this.note = {
      title:title,
      body:body
    };

    this.notesService.addNewNote(this.note).subscribe(res =>{
      alert("The Note has been Added Succesfully");
      this.router.navigate(['']);
    });

  }

}
