package com.bookdiscovery.authorservice.service;

import com.bookdiscovery.authorservice.dto.AuthorDTO;
import com.bookdiscovery.authorservice.entity.Author;
import com.bookdiscovery.authorservice.exception.AuthorNotFoundException;
import com.bookdiscovery.authorservice.repository.AuthorRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class AuthorServiceImplTest {

    @InjectMocks
    private AuthorService authorService = new AuthorServiceImpl();

    @Mock
    private AuthorRepository authorRepository;

    @Mock
    private ModelMapper modelMapper;

    private ModelMapper mapper;

    @BeforeEach
    public void setup() {
        this.mapper = new ModelMapper();
    }

    @Test
    void ShouldReturnAuthorWhenGivenExistingIdTest() {
        Author author = new Author(1, "VK Ahulwalia", null, null);
        AuthorDTO authorDTO = this.mapper.map(author, AuthorDTO.class);
        when(authorRepository.findById(1)).thenReturn(Optional.of(author));
        when(modelMapper.map(author, AuthorDTO.class)).thenReturn(authorDTO);
        assertEquals(authorDTO, authorService.findAuthorById(1));
    }

    @Test
    void ShouldThrowExceptionWhenGivenNonExistingIdTest() {
        Optional<Author> author = Optional.empty();
        when(authorRepository.findById(0)).thenReturn(author);
        RuntimeException thrown = Assertions.assertThrows(AuthorNotFoundException.class, () -> {
            authorService.findAuthorById(0);
        });
        Assertions.assertEquals("Did not find author with id - " + 0, thrown.getMessage());
    }

}