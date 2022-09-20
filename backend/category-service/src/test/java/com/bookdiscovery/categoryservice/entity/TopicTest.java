package com.bookdiscovery.categoryservice.entity;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

class TopicTest {

    @Autowired
    private TestEntityManager entityManager;

    @Test
    void topicEntityTest() {

        Topic topic = new Topic();
        topic.setId(1);

        topic.setName("Mathematics");
        topic.setImage("/assets/images/topics/topic_small_1.png");
        Assertions.assertEquals("Mathematics", topic.getName());
        Assertions.assertEquals(1, topic.getId());
        Assertions.assertEquals("/assets/images/topics/topic_small_1.png", topic.getImage());
    }
}