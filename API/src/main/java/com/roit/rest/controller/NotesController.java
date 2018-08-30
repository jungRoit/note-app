/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.roit.rest.controller;

import com.roit.rest.dao.NotesDAO;
import com.roit.rest.entity.Notes;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Rahul
 */
@RestController
@CrossOrigin
@RequestMapping("/roit")
public class NotesController {
    
    @Autowired
    NotesDAO notesDAO;
    
    @PostMapping("/notes")
    public Notes insertNotes(@Valid @RequestBody Notes note){
        return notesDAO.insert(note);
    }
    
    @GetMapping("/notes")
    public List<Notes> getAllNotes(){
        return notesDAO.getAll();
    }
    
    @GetMapping("/notes/{id}")
    public ResponseEntity<Notes> getById(@PathVariable("id")int id){
        Notes n= notesDAO.getById(id);
        
        if(n == null){
            return ResponseEntity.notFound().build();
        }else{
            return ResponseEntity.ok().body(n);
        }
    }
    
    @PutMapping("/notes/{id}")
     public ResponseEntity<Notes> update(@PathVariable("id")int id, @Valid @RequestBody Notes note){
        Notes n = notesDAO.getById(id);
        
         if(n == null){
            return ResponseEntity.notFound().build();
        }
         n.setTitle(note.getTitle());
         n.setBody(note.getBody());
         
         Notes updatedNote = notesDAO.insert(n);
         return ResponseEntity.ok().body(updatedNote);
    }
     
     @DeleteMapping("/notes/{id}")
     public ResponseEntity<Notes> delete(@PathVariable("id")int id){
         Notes note = notesDAO.getById(id);
         
         if(note == null){
             return ResponseEntity.notFound().build();
         }
         
         notesDAO.delete(note);
         return ResponseEntity.ok().build();
         
     }
    
    
    
}
