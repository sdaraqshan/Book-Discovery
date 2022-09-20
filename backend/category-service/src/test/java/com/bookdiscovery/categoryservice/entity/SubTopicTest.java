package com.bookdiscovery.categoryservice.entity;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

class SubTopicTest {

    @Autowired
    private TestEntityManager entityManager;

    @Test
    void subtopicEntityTest() {

        SubTopic subtopic = new SubTopic();
        subtopic.setId(1);

        subtopic.setName("Calculus");
        subtopic.setTopicId(1);
        Assertions.assertEquals("Calculus", subtopic.getName());
        Assertions.assertEquals(1, subtopic.getId());
        Assertions.assertEquals(1, subtopic.getTopicId());
    }
}