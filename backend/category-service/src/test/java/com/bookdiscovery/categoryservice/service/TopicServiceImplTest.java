package com.bookdiscovery.categoryservice.service;

import com.bookdiscovery.categoryservice.dto.SubTopicDTO;
import com.bookdiscovery.categoryservice.dto.TopicDTO;
import com.bookdiscovery.categoryservice.entity.SubTopic;
import com.bookdiscovery.categoryservice.entity.Topic;
import com.bookdiscovery.categoryservice.exception.TopicNotFoundException;
import com.bookdiscovery.categoryservice.repository.SubTopicRepository;
import com.bookdiscovery.categoryservice.repository.TopicRepository;
import com.bookdiscovery.categoryservice.service.impl.TopicServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class TopicServiceImplTest {
    @InjectMocks
    private TopicService topicService = new TopicServiceImpl();

    @Mock
    private TopicRepository topicRepository;

    @Mock
    private  SubTopicRepository subTopicRepository;

    @Mock
    private ModelMapper modelMapper;

    private ModelMapper mapper;

    @BeforeEach
    public void setup() {
        this.mapper = new ModelMapper();
    }

    @Test
    void ShouldReturnSubTopicWhenGivenExistingIdTest() {
        Topic topic = new Topic(1, "Mathematics", "/assets/images/topics/topic_small_1.png");
        TopicDTO topicDTO = this.mapper.map(topic, TopicDTO.class);
        when(topicRepository.findById(1)).thenReturn(Optional.of(topic));
        when(modelMapper.map(topic, TopicDTO.class)).thenReturn(topicDTO);
        SubTopic subTopic = new SubTopic(1, "Algebra & linear algebra", 1);
        List<SubTopic> subTopics = new ArrayList<>();
        subTopics.add(subTopic);
        when(subTopicRepository.findByTopicId(1)).thenReturn(subTopics);
        SubTopicDTO subTopicDTO = this.mapper.map(subTopic, SubTopicDTO.class);
        when(modelMapper.map(subTopic, SubTopicDTO.class)).thenReturn(subTopicDTO);
        List<SubTopicDTO> subTopicDTOS = new ArrayList<>();
        subTopicDTOS.add(subTopicDTO);
        topicDTO.setSubtopics(subTopicDTOS);
        assertEquals(topicDTO, topicService.findTopicById(1));
    }

    @Test
    void ShouldThrowExceptionWhenGivenNonExistingIdTest() {
        Optional<Topic> topic = Optional.empty();
        when(topicRepository.findById(0)).thenReturn(topic);
        RuntimeException thrown = Assertions.assertThrows(TopicNotFoundException.class, () -> {
            topicService.findTopicById(0);
        });
        Assertions.assertEquals("Did not find topic with id - " + 0, thrown.getMessage());
    }
}