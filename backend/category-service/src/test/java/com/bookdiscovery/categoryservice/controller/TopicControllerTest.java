package com.bookdiscovery.categoryservice.controller;

import com.bookdiscovery.categoryservice.dto.SubTopicDTO;
import com.bookdiscovery.categoryservice.dto.TopicDTO;
import com.bookdiscovery.categoryservice.service.TopicService;
import com.bookdiscovery.categoryservice.service.impl.TopicServiceImpl;
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

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
class TopicControllerTest {

    @InjectMocks
    private TopicController topicController;

    @Mock
    private TopicService topicService;

    @Autowired
    private MockMvc mockMvc;

    @BeforeEach
    void setup() {

        mockMvc = MockMvcBuilders
                .standaloneSetup(topicController)
                .build();

        topicService = Mockito.mock(TopicServiceImpl.class);
    }

    @Test
    void ShouldReturnTopicWhenGivenExistingIdTest() throws Exception {

        List<SubTopicDTO> subTopics = new ArrayList<SubTopicDTO>();
        subTopics.add(new SubTopicDTO(1, "Algebra & linear algebra"));
        TopicDTO topic = new TopicDTO(1, "Mathematics", "/assets/images/topics/topic_small_1.png", subTopics);
        Mockito.when(topicService.findTopicById(1)).thenReturn(topic);

        mockMvc.perform(
                        MockMvcRequestBuilders
                                .get("http://localhost:9191/categories/topics/1")
                                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().is(200))
                .andDo(MockMvcResultHandlers.print());

        assertEquals(topic, topicService.findTopicById(1));

    }

    @Test
    void ShouldReturnNullWhenGivenExistingIdTest() throws Exception {

        TopicDTO topic = null;
        Mockito.when(topicService.findTopicById(0)).thenReturn(topic);

        mockMvc.perform(
                        MockMvcRequestBuilders
                                .get("http://localhost:9191/categories/topics/0")
                                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().is(200))
                .andDo(MockMvcResultHandlers.print());

        assertEquals(topic, topicService.findTopicById(0));

    }
}