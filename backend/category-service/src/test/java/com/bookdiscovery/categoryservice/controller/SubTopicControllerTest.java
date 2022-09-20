package com.bookdiscovery.categoryservice.controller;

import com.bookdiscovery.categoryservice.dto.SubTopicDTO;
import com.bookdiscovery.categoryservice.service.SubTopicService;
import com.bookdiscovery.categoryservice.service.impl.SubTopicServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
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
class SubTopicControllerTest {

    @InjectMocks
    private SubTopicController subTopicController;

    @Mock
    private SubTopicService subTopicService;

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    void setup() {

        mockMvc = MockMvcBuilders
                .standaloneSetup(subTopicController)
                .build();

        subTopicService = Mockito.mock(SubTopicServiceImpl.class);
    }

    @Test
    void ShouldReturnSubTopicWhenGivenExistingIdTest() throws Exception {

        SubTopicDTO subTopic = new SubTopicDTO(1, "Algebra & linear algebra");
        Mockito.when(subTopicService.findSubTopicById(1)).thenReturn(subTopic);

        mockMvc.perform(
                        MockMvcRequestBuilders
                                .get("http://localhost:9191/categories/subtopics/1")
                                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().is(200))
                .andDo(MockMvcResultHandlers.print());

        assertEquals(subTopic, subTopicService.findSubTopicById(1));

    }

    @Test
    void ShouldReturnNullWhenGivenNonExistingIdTest() throws Exception {

        SubTopicDTO subTopic = null;
        Mockito.when(subTopicService.findSubTopicById(0)).thenReturn(subTopic);

        mockMvc.perform(
                        MockMvcRequestBuilders
                                .get("http://localhost:9191/categories/subtopics/0")
                                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().is(200))
                .andDo(MockMvcResultHandlers.print());

        assertEquals(subTopic, subTopicService.findSubTopicById(0));

    }
}