package com.bookdiscovery.categoryservice.dto;

import com.bookdiscovery.categoryservice.entity.Topic;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;

class TopicDTOTest {
    @Mock
    private ModelMapper modelMapper;

    @Test
    void topicDTOTest() {
        Topic topic = new Topic(1, "Mathematics", "/assets/images/topics/topic_small_1.png");
        TopicDTO topicDTO = new TopicDTO();
        topicDTO.setId(topic.getId());
        topicDTO.setName(topic.getName());
        topicDTO.setImage(topic.getImage());

        Assertions.assertEquals(1, topicDTO.getId());
        Assertions.assertEquals("Mathematics", topicDTO.getName());
        Assertions.assertEquals("/assets/images/topics/topic_small_1.png", topicDTO.getImage());
    }
}