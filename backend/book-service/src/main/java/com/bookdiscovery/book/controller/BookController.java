package com.bookdiscovery.book.controller;

import com.bookdiscovery.book.dto.BookDTO;
import com.bookdiscovery.book.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    Logger logger = LoggerFactory.getLogger(BookController.class);

    @Autowired
    private BookService bookService;

    @GetMapping("/")
    public List<BookDTO> getBooks(){

        try {
            return bookService.findAll();
        }
        catch( Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No books found");
        }
    }

    @GetMapping("/{id}")
    public BookDTO getBookById(@PathVariable("id") int id){
            return bookService.getBookByID(id);
    }
}