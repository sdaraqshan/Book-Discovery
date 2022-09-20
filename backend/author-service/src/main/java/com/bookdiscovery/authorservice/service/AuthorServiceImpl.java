package com.bookdiscovery.authorservice.service;

import com.bookdiscovery.authorservice.dto.AuthorDTO;
import com.bookdiscovery.authorservice.entity.Author;
import com.bookdiscovery.authorservice.exception.AuthorNotFoundException;
import com.bookdiscovery.authorservice.repository.AuthorRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthorServiceImpl implements AuthorService{

    @Autowired
    private AuthorRepository authorRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public AuthorDTO findAuthorById(int id) {
        Optional<Author> result = authorRepository.findById(id);
        AuthorDTO author;
        if(result.isPresent()) {
            author = modelMapper.map(result.get(), AuthorDTO.class);
        }
        else {
            throw new AuthorNotFoundException("Did not find author with id - " + id);
        }
        return author;
    }

}