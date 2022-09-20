package com.bookdiscovery.userservice.servicetests;

import com.bookdiscovery.userservice.dto.UserDto;
import com.bookdiscovery.userservice.dtomapper.UserDtoMapper;
import com.bookdiscovery.userservice.entity.BookState;
import com.bookdiscovery.userservice.entity.User;
import com.bookdiscovery.userservice.entity.UserBooks;
import com.bookdiscovery.userservice.exception.UserBooksNotFoundException;
import com.bookdiscovery.userservice.exception.UserNotFoundException;
import com.bookdiscovery.userservice.repository.BookStateRepository;
import com.bookdiscovery.userservice.repository.UserRepository;
import com.bookdiscovery.userservice.service.UserService;
import com.bookdiscovery.userservice.service.impl.UserServiceImpl;
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

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

@WebMvcTest(UserService.class)
class UserServiceTests {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper mapper;
    @MockBean
    private UserDtoMapper mapperService;

    @Autowired
    private UserService service;
    @Autowired
    private UserServiceImpl userService;
    @MockBean
    private UserRepository userRepository;
    @MockBean
    private BookStateRepository bookStateRepository;

    private User firstUser = new User();
    private User secondUser = new User();

    private UserBooks firstBook;

    private UserBooks secondBook;

    private BookState currentState;

    private BookState toReadState;

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
    }

    @DisplayName("Test for getting all users")
    @Test
    void fetchAlUsers() throws Exception {

        List<User> records = new ArrayList<>(Arrays.asList(firstUser, secondUser));

        List<UserDto> dtoRecords = records.stream()
                .map(mapperService::userEntityToDto)
                .collect(Collectors.toList());

        Mockito.when(userService.findAll()).thenReturn(dtoRecords);

        List<UserDto> users = userService.findAll();
        assertNotNull(users);
    }

    @DisplayName("Test for finding a user by id")
    @Test
    void fetchUserById() throws Exception {
        int firstId = 1;

        try {
            Mockito.when(userService.findById(firstId)).thenReturn(mapperService.userEntityToDto(firstUser));
            UserDto user = userService.findById(firstId);
            assertNotNull(user);
        }
        catch (Exception e) {

        }
    }

    @DisplayName("Test for updating user book")
    @Test
    void updateUserBook() throws Exception {
        int firstId = 1;
        int bookId = 1;
        String state = "Currently reading";

        int secondId = 100;
        int secondBookId = 67;

        try {
              UserServiceImpl mockUserService = mock(UserServiceImpl.class);
              doCallRealMethod().when(mockUserService).updateUserBook(firstId, bookId, state);
              mockUserService.updateUserBook(firstId, bookId, state);
              verify(mockUserService, times(1)).updateUserBook(firstId, bookId, state);

        }
        catch(Exception e) {
            

        }
    }

}
