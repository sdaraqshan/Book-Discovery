package com.bookdiscovery.authorservice.controller;

import com.bookdiscovery.authorservice.dto.AuthorDTO;
import com.bookdiscovery.authorservice.service.AuthorService;
import com.bookdiscovery.authorservice.service.AuthorServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;


@ExtendWith(MockitoExtension.class)
class AuthorControllerTest {

    @InjectMocks
    private AuthorController authorController;

    @Mock
    private AuthorService authorService;

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    void setup() {

        mockMvc = MockMvcBuilders
                .standaloneSetup(authorController)
                .build();

        authorService = Mockito.mock(AuthorServiceImpl.class);
    }

    @Test
    void ShouldReturnAuthorWhenGivenExistingIdTest() throws Exception {

        AuthorDTO author = new AuthorDTO(1, "VK Ahulwalia", null, null);
        Mockito.when(authorService.findAuthorById(1)).thenReturn(author);

        mockMvc.perform(
                MockMvcRequestBuilders
                        .get("http://localhost:9191/authors/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().is(200))
                .andDo(MockMvcResultHandlers.print());

        assertEquals(author, authorService.findAuthorById(1));

    }

    @Test
    void ShouldThrowExceptionWhenGivenNonExistingIdTest() throws Exception {
        AuthorDTO author = null;
        Mockito.when(authorService.findAuthorById(0)).thenReturn(author);

        mockMvc.perform(
                        MockMvcRequestBuilders
                                .get("http://localhost:9191/authors/0")
                                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().is(200))
                .andDo(MockMvcResultHandlers.print());

        assertEquals(author, authorService.findAuthorById(0));
    }


}