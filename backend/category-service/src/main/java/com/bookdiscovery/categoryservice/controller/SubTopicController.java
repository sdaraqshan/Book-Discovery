package com.bookdiscovery.categoryservice.controller;

import com.bookdiscovery.categoryservice.dto.SubTopicDTO;
import com.bookdiscovery.categoryservice.service.SubTopicService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/categories")
public class SubTopicController {

    Logger logger = LoggerFactory.getLogger(SubTopicController.class);

    @Autowired
    private SubTopicService subTopicService;

    @GetMapping("/subtopics/{id}")
    public SubTopicDTO getSubTopic(@PathVariable int id){
            return subTopicService.findSubTopicById(id);
    }

}