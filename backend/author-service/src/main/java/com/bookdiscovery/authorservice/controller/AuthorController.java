package com.bookdiscovery.authorservice.controller;

import com.bookdiscovery.authorservice.dto.AuthorDTO;
import com.bookdiscovery.authorservice.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/authors")
public class AuthorController {

    Logger logger = LoggerFactory.getLogger(AuthorController.class);

    @Autowired
    private AuthorService authorService;

    @GetMapping("/{id}")
    public AuthorDTO getAuthor(@PathVariable int id){
            return authorService.findAuthorById(id);
    }
}