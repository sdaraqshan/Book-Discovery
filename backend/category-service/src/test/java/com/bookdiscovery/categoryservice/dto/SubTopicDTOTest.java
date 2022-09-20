package com.bookdiscovery.categoryservice.dto;

import com.bookdiscovery.categoryservice.entity.SubTopic;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

class SubTopicDTOTest {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    void subTopicDTOTest() {
        SubTopic subtopic = new SubTopic(1, "Calculus", 1);
        SubTopicDTO subtopicDTO = new SubTopicDTO();
        subtopicDTO.setId(subtopic.getId());
        subtopicDTO.setName(subtopic.getName());

        Assertions.assertEquals(subtopicDTO.getId(), subtopic.getId());
        Assertions.assertEquals(subtopicDTO.getName(), subtopic.getName());
    }
}