package com.bookdiscovery.userservice.controllertests;

import com.bookdiscovery.userservice.dto.UserBooksDto;
import com.bookdiscovery.userservice.dto.UserDto;
import com.bookdiscovery.userservice.dtomapper.UserDtoMapper;
import com.bookdiscovery.userservice.controller.UserController;
import com.bookdiscovery.userservice.entity.BookState;
import com.bookdiscovery.userservice.entity.User;
import com.bookdiscovery.userservice.entity.UserBooks;
import com.bookdiscovery.userservice.repository.BookStateRepository;
import com.bookdiscovery.userservice.repository.UserBooksRepository;
import com.bookdiscovery.userservice.repository.UserRepository;
import com.bookdiscovery.userservice.service.UserBooksService;
import com.bookdiscovery.userservice.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(UserController.class)
class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper mapper;

    @MockBean
    private UserDtoMapper mapperService;

    @MockBean
    private UserRepository userRepository;

    @MockBean
    private UserBooksRepository userBooksRepository;

    @MockBean
    private BookStateRepository bookStateRepository;

    @MockBean
    private UserService userService;

    @MockBean
    private UserBooksService userBooksService;

    @Autowired
    private UserController userController;

    private User firstUser;
    private User secondUser;
    private User thirdUser;

    private UserBooks firstBook;

    private UserBooks secondBook;

    private BookState currentState;

    private BookState toReadState;

    @BeforeEach
    void setup(){
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
        thirdUser = User.builder()
                .userId(3)
                .firstName("Austin")
                .lastName("Bing")
                .image("test image url 3")
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

    @DisplayName("JUint test for fetching all users")
    @Test
    void getAllUsers() throws Exception {
        List<User> records = new ArrayList<>(Arrays.asList(firstUser, secondUser, thirdUser));

        List<UserDto> dtoRecords = records.stream()
                        .map(mapperService::userEntityToDto)
                                .collect(Collectors.toList());

        Mockito.when(userController.getUsers()).thenReturn(dtoRecords);

       ResultActions result = mockMvc.perform(MockMvcRequestBuilders
               .get("http://localhost:9191/users/")
               .contentType(MediaType.APPLICATION_JSON))
               .andExpect(status().isOk())
               .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(3)));

        Mockito.when(userController.getUsers()).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No user found with the given id"));

        ResultActions exceptionResult = mockMvc.perform(MockMvcRequestBuilders
                .get("http://localhost:9191/users/")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());

    }

    @DisplayName("JUnit test for fetching a single user")
    @Test
    void getSingleUser() throws Exception {

        UserDto userDto = mapperService.userEntityToDto(secondUser);

        Mockito.when(userController.getUserById(2)).thenReturn(userDto);
        Mockito.when(userController.getUserById(900)).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No user found with the given id"));

        mockMvc.perform(MockMvcRequestBuilders
                .get("http://localhost:9191/users/2")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(MockMvcRequestBuilders
                .get("http://localhost:9191/users/900")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());

    }

    @DisplayName("JUnit test for fetching books of a user")
    @Test
    void getBooksOfAUser() throws Exception {

        UserBooksDto firstBookDto = mapperService.userBooksEntityToDto(firstBook);

        Mockito.when(userController.getUserBooksById(1, 1)).thenReturn(firstBookDto);
        Mockito.when(userController.getUserBooksById(100, 6)).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No user found with the given id"));

        mockMvc.perform(MockMvcRequestBuilders
                .get("http://localhost:9191/users/1/books/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(MockMvcRequestBuilders
                .get("http://localhost:9191/users/100/books/6")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @DisplayName("JUnit test for updating state of a book")
    @Test
    void updateStateOfABook() throws Exception {

        UserController mockUserController = mock(UserController.class);

        doNothing().when(mockUserController).postUserBooksById(1, 1, "Currently reading");

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders
                .post("http://localhost:9191/users/1/books/1")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON).
                content("Currently reading");

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk());

//        String value = anyString();
//
//        doThrow(new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to update user")).when(mockUserController).postUserBooksById(100, 67, value);
//
//        MockHttpServletRequestBuilder secondMockRequest = MockMvcRequestBuilders
//                .post("http://localhost:9191/users/100/books/67")
//                .contentType(MediaType.APPLICATION_JSON)
//                .accept(MediaType.APPLICATION_JSON).
//                content("Currently reading");
//
//        mockMvc.perform(secondMockRequest)
//                .andExpect(status().isBadRequest());

    }

    @DisplayName("JUnit test for fetching all users of a particular book")
    @Test
    void getAllUserBooks() throws Exception {

        List<UserBooks> records = new ArrayList<>(Arrays.asList(firstBook, secondBook));

        List<UserBooksDto> dtoRecords = records.stream()
                .map(mapperService::userBooksEntityToDto)
                .collect(Collectors.toList());

        Mockito.when(userController.getUserBooks()).thenReturn(dtoRecords);

        mockMvc.perform(MockMvcRequestBuilders
                .get("http://localhost:9191/users/bookState")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", Matchers.hasSize(2)));

        Mockito.when(userController.getUserBooks()).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No user found with the given id"));

        mockMvc.perform(MockMvcRequestBuilders
                .get("http://localhost:9191/users/bookState")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());

    }

    @DisplayName("JUnit test for counting read books")
    @Test
    void countReadBooks() throws Exception {

        List<String> state = new ArrayList<>();
        state.add("reading");
        state.add("read");

        Mockito.when(userController.getTrackerCount("read")).thenReturn((long)2);

        mockMvc.perform(MockMvcRequestBuilders
                        .get("http://localhost:9191/users/trackerCount?stateName=read")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        Mockito.when(userController.getTrackerCount("test")).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND, "No state with the given name found"));

        mockMvc.perform(MockMvcRequestBuilders
                .get("http://localhost:9191/user/trackerCount?stateName=test")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

}
