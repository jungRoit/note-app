/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.roit.rest.dao;

import com.roit.rest.entity.Notes;
import com.roit.rest.repository.NotesRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Rahul
 */
@Service
public class NotesDAO {
    
    @Autowired
    NotesRepository notesRepo;
    
    //insert
    public Notes insert(Notes note){
        return notesRepo.save(note);
    }
    
    //getAll
    public List<Notes> getAll(){
       return notesRepo.findAll();
    }
    
   
    //getById
    public Notes getById(int id){
        return notesRepo.findOne(id);
    }
    
    
    //delete
    public void delete(Notes note){
        notesRepo.delete(note);
    }
    
}
