package com.bookdiscovery.book.controller;

import com.bookdiscovery.book.dto.AuthorDTO;
import com.bookdiscovery.book.dto.BookDTO;
import com.bookdiscovery.book.dto.CategoryDTO;
import com.bookdiscovery.book.entity.Book;
import com.bookdiscovery.book.service.BookService;
import com.bookdiscovery.book.service.BookServiceImplementation;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.modelmapper.TypeToken;
import java.lang.reflect.Type;

@ExtendWith(MockitoExtension.class)
class BookControllerTest {

    @InjectMocks
    private BookController bookController;

    @Mock
    private BookService bookService;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ModelMapper modelMapper;

    @BeforeEach
    void setup() {

        mockMvc = MockMvcBuilders
                .standaloneSetup(bookController)
                .build();

        bookService = Mockito.mock(BookServiceImplementation.class);

        modelMapper = new ModelMapper();
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

        Type listType = new TypeToken<List<BookDTO>>(){}.getType();
        List<BookDTO> bookDTOList = modelMapper.map(books,listType);

        Mockito.when(bookController.getBooks()).thenReturn(bookDTOList);

        ResultActions result = mockMvc.perform(MockMvcRequestBuilders
                        .get("http://localhost:9191/books/")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(4)));

    }

    @Test
    void ShouldReturnBookWhenGivenExistingIdTest() throws Exception {

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
        BookDTO book = new BookDTO(
                1,
                "Inorganic Chemistry",
                authorDTO,
                categoryDTO,
                "12th September 1998",
                "English",
                "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more",
                0,
                "/assets/images/books/book_large_1.png");
        Mockito.when(bookService.getBookByID(1)).thenReturn(book);

        mockMvc.perform(
                        MockMvcRequestBuilders
                                .get("http://localhost:9191/books/1")
                                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().is(200))
                .andDo(MockMvcResultHandlers.print());

        assertEquals(book, bookService.getBookByID(1));

    }

    @Test
    void ShouldReturnNullWhenGivenNonExistingIdTest() throws Exception {

        BookDTO book = null;
        Mockito.when(bookService.getBookByID(0)).thenReturn(book);

        mockMvc.perform(
                        MockMvcRequestBuilders
                                .get("http://localhost:9191/books/0")
                                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().is(200))
                .andDo(MockMvcResultHandlers.print());

        assertEquals(book, bookService.getBookByID(0));

    }
}
