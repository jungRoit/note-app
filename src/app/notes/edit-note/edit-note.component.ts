import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-note',
  providers: [NotesService],
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
id;
note;
notes;
  constructor(private notesService:NotesService, private router:Router, private routes:ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(params=>{
      this.id = params['id'];
  
      this.notesService.getById(this.id).subscribe(res =>{
        this.notes = res;   
      });
    });
  }


  editNote(title,body){
    this.note = {
      id:this.id,
      title: title,
      body:body
    }

    this.notesService.updateNote(this.note).subscribe(res =>{
      console.log(res);
      alert("The Note has been Updated Succesfully");
      this.router.navigate(['']);
    });
  }

}
