package com.bookdiscovery.categoryservice.repository;

import com.bookdiscovery.categoryservice.entity.SubTopic;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubTopicRepository extends JpaRepository<SubTopic, Integer> {
    List<SubTopic> findByTopicId(int topicId);
}
