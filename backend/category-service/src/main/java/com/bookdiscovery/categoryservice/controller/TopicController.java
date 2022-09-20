package com.bookdiscovery.categoryservice.controller;

import com.bookdiscovery.categoryservice.dto.TopicDTO;
import com.bookdiscovery.categoryservice.service.TopicService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categories")
public class TopicController {

    Logger logger = LoggerFactory.getLogger(TopicController.class);

    @Autowired
    private TopicService topicService;

    @GetMapping("/topics/{id}")
    public TopicDTO getTopic(@PathVariable int id){
            return topicService.findTopicById(id);
    }

}