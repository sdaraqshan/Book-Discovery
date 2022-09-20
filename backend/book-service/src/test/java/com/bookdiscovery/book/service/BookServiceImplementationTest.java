package com.bookdiscovery.book.service;

import com.bookdiscovery.book.dto.AuthorDTO;
import com.bookdiscovery.book.dto.BookDTO;
import com.bookdiscovery.book.dto.CategoryDTO;
import com.bookdiscovery.book.entity.Book;
import com.bookdiscovery.book.exception.BookNotFoundException;
import com.bookdiscovery.book.repository.BookRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;
import static org.mockito.Mockito.lenient;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@ExtendWith(MockitoExtension.class)
class BookServiceImplementationTest {

    @InjectMocks
    private BookService bookService = new BookServiceImplementation();

    @Mock
    private BookRepository bookRepository;

    @Mock
    private ModelMapper modelMapper;

    private ModelMapper mapper;

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private RestTemplate restTemplate;

    @BeforeEach
    void setup() {

        this.mapper = new ModelMapper();
    }

    @Test
    void ShouldReturnAllBooks() throws Exception {
        Book firstBook = new Book(
                1,
                "Inorganic Chemistry",
                1,
                10,
                "12th September 1998",
                "English",
                "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more",
                0,
                "/assets/images/books/book_large_1.png");

        Book secondBook = new Book(
                2,
                "Inorganic Chemistry",
                1,
                10,
                "12th September 1998",
                "English",
                "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more",
                0,
                "/assets/images/books/book_large_2.png");
        Book thirdBook = new Book(
                3,
                "Inorganic Chemistry",
                1,
                10,
                "12th September 1998",
                "English",
                "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more",
                0,
                "/assets/images/books/book_large_3.png");

        Book fourthBook = new Book(
                4,
                "Inorganic Chemistry",
                1,
                10,
                "12th September 1998",
                "English",
                "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more",
                0,
                "/assets/images/books/book_large_4.png");

        List<Book> books = new ArrayList<>(Arrays.asList(firstBook,secondBook,thirdBook,fourthBook));

        when(bookRepository.findAll()).thenReturn(books);
        List<BookDTO> findBooks = bookService.findAll();
        assertNotNull(findBooks);

    }


    @Test
    void ShouldReturnBookWhenGivenExistingIdTest() {
        AuthorDTO authorDTO = new AuthorDTO(
                1,
                "J D Lee",
                "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.",
                "/assets/images/topics/avatar_large_1.png"
        );

        CategoryDTO categoryDTO = new CategoryDTO(
                1,
                "Chemistry"
        );
        Book book = new Book(
                1,
                "Inorganic Chemistry",
                1,
                10,
                "12th September 1998",
                "English",
                "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more",
                0,
                "/assets/images/books/book_large_1.png");

        BookDTO bookDTO = this.mapper.map(book, BookDTO.class);
        when(bookRepository.findById(1)).thenReturn(Optional.of(book));
        when(modelMapper.map(book, BookDTO.class)).thenReturn(bookDTO);
        lenient().when(restTemplate.getForObject("http://localhost:9191/authors/" + book.getAuthorId(),AuthorDTO.class)).thenReturn(authorDTO);
        lenient().when(restTemplate.getForObject("http://localhost:9191/categories/subtopics/" + book.getSubtopicId(),CategoryDTO.class)).thenReturn(categoryDTO);
        assertEquals(bookDTO, bookService.getBookByID(1));
    }

    @Test
    void ShouldThrowExceptionWhenGivenNonExistingIdTest() {
        RuntimeException thrown = Assertions.assertThrows(BookNotFoundException.class, () -> {
            bookService.getBookByID(0);
        });
        Assertions.assertEquals("Did not find book with id - " + 0, thrown.getMessage());
    }
}
