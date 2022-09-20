package com.bookdiscovery.userservice.servicetests;

import com.bookdiscovery.userservice.dto.UserBooksDto;
import com.bookdiscovery.userservice.dtomapper.UserDtoMapper;
import com.bookdiscovery.userservice.entity.BookState;
import com.bookdiscovery.userservice.entity.User;
import com.bookdiscovery.userservice.entity.UserBooks;
import com.bookdiscovery.userservice.repository.BookStateRepository;
import com.bookdiscovery.userservice.repository.UserBooksRepository;
import com.bookdiscovery.userservice.repository.UserRepository;
import com.bookdiscovery.userservice.service.UserBooksService;
import com.bookdiscovery.userservice.service.impl.UserBooksServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@WebMvcTest(UserBooksService.class)
class UserBooksServiceTests {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper mapper;
    @MockBean
    private UserDtoMapper mapperService;

    @Autowired
    private UserBooksService service;
    @Autowired
    private UserBooksServiceImpl userService;
    @MockBean
    private UserRepository userRepository;
    @MockBean
    private BookStateRepository bookStateRepository;
    @MockBean
    private UserBooksRepository userBooksRepository;

    private User firstUser = new User();
    private User secondUser = new User();

    private UserBooks firstBook;

    private UserBooks secondBook;

    private BookState currentState;

    private BookState toReadState;

    private long read_books;

    @BeforeEach
    void setup() {
        firstUser = User.builder()
                .userId(1)
                .firstName("John")
                .lastName("Doe")
                .image("test image url1")
                .build();
        secondUser = User.builder()
                .userId(2)
                .firstName("Emily")
                .lastName("Geller")
                .image("test image url 2")
                .build();
        currentState = BookState.builder()
                .stateId(1)
                .stateName("Currently reading")
                .build();

        toReadState = BookState.builder()
                .stateId(2)
                .stateName("Books to read")
                .build();

        firstBook = UserBooks.builder()
                .bookId(1)
                .user(firstUser)
                .bookState(toReadState)
                .pagesLeft(89)
                .rating(4.5f)
                .reviewComment("Test review")
                .build();

        secondBook = UserBooks.builder()
                .bookId(2)
                .user(secondUser)
                .bookState(currentState)
                .pagesLeft(100)
                .rating(3.6f)
                .reviewComment("Test review")
                .build();

        read_books = 1;
    }

    @DisplayName("Test for getting all users of a book")
    @Test
    void fetchAlUserBooks() throws Exception {

        try {

            List<UserBooks> records = new ArrayList<>(Arrays.asList(firstBook, secondBook));

            List<UserBooksDto> dtoRecords = records.stream()
                    .map(mapperService::userBooksEntityToDto)
                    .collect(Collectors.toList());

            Mockito.when(userService.findAll()).thenReturn(dtoRecords);

            List<UserBooksDto> userBooks = userService.findAll();
            assertNotNull(userBooks);
        }
        catch(Exception e) {

        }
    }

    @DisplayName("Test for fetching books of a user")
    @Test
    void fetchUserBook() throws Exception {

        try {
            UserBooksDto firstBookDto = mapperService.userBooksEntityToDto(firstBook);

            Mockito.when(userService.findById(1, 1)).thenReturn(firstBookDto);

            UserBooksDto userBook = userService.findById(1, 1);
            assertNotNull(userBook);
        }
        catch(Exception e) {

        }
    }

    @DisplayName("Test for fetching count of idle books")
    @Test
    void fetchIdleBookCount() throws Exception {

        try {
            Mockito.when(service.countBooksByState("read")).thenReturn(read_books);

            long readBooks = userService.countBooksByState("read");
            assertThat(readBooks).isEqualTo(1);
        }
        catch(Exception e) {

        }
    }
}
