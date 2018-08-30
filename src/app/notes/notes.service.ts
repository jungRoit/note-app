import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NotesService {

  constructor(private http:Http) { }

  getAllNotes(){
    return this.http.get("http://localhost:8080/roit/notes").map(res => res.json());
  }

  addNewNote(note){
    return this.http.post("http://localhost:8080/roit/notes",note);
  }

  getById(id){
    return this.http.get("http://localhost:8080/roit/notes/"+id).map(res => res.json());
  }

  updateNote(note){
    return this.http.put("http://localhost:8080/roit/notes/"+note.id,note);
  }

  deleteNote(id){
    return this.http.delete("http://localhost:8080/roit/notes/"+id);
  }

}
