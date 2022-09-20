package com.bookdiscovery.authorservice.dto;

import com.bookdiscovery.authorservice.entity.Author;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

class AuthorDTOTest {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    void authorDTOTest() {
        Author author = new Author(17, "JK Rowling", null, null);
        AuthorDTO authorDTO = new AuthorDTO();
        authorDTO.setId(author.getId());
        authorDTO.setName(author.getName());
        authorDTO.setDescription(author.getDescription());
        authorDTO.setImage(author.getImage());

        Assertions.assertEquals(authorDTO.getId(), author.getId());
        Assertions.assertEquals(authorDTO.getName(), author.getName());
        Assertions.assertEquals(authorDTO.getDescription(), author.getDescription());
        Assertions.assertEquals(authorDTO.getImage(), author.getImage());
    }

}