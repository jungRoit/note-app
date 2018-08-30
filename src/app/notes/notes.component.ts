import { Component, OnInit } from '@angular/core';
import {NotesService} from './notes.service';

@Component({
  selector: 'app-notes',
  providers:[NotesService],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
notes = [];

  constructor(private notesService:NotesService) { }

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes(){
    this.notesService.getAllNotes().subscribe(res=>{
      this.notes = res;
      console.log(this.notes);
    })
  }

  deleteNote(id){
    if(confirm("Are you Sure You wanna delete this Note?")){
      this.notesService.deleteNote(id).subscribe(res =>{
        alert("The Note has been Deleted Succesfully");
        this.notesService.getAllNotes().subscribe(res =>{
          this.notes = res;
        });
      });
    }
  
  }

  

}
