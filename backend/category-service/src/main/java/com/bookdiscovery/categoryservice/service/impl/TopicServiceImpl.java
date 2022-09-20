package com.bookdiscovery.categoryservice.service.impl;

import com.bookdiscovery.categoryservice.dto.SubTopicDTO;
import com.bookdiscovery.categoryservice.dto.TopicDTO;
import com.bookdiscovery.categoryservice.entity.SubTopic;
import com.bookdiscovery.categoryservice.entity.Topic;
import com.bookdiscovery.categoryservice.exception.TopicNotFoundException;
import com.bookdiscovery.categoryservice.repository.SubTopicRepository;
import com.bookdiscovery.categoryservice.repository.TopicRepository;
import com.bookdiscovery.categoryservice.service.TopicService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TopicServiceImpl implements TopicService {

    @Autowired
    private TopicRepository topicRepository;

    @Autowired
    private SubTopicRepository subTopicRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public TopicDTO findTopicById(int id) {
        Optional<Topic> result = topicRepository.findById(id);
        TopicDTO topic;
        if(result.isPresent()) {
            topic = modelMapper.map(result.get(), TopicDTO.class);
            List<SubTopic> subTopics = subTopicRepository.findByTopicId(id);
            List<SubTopicDTO> subTopicDTOS = new ArrayList<>();
            for (SubTopic subTopic : subTopics)
            {
                subTopicDTOS.add(modelMapper.map(subTopic, SubTopicDTO.class));
            }
            topic.setSubtopics(subTopicDTOS);
        }
        else {
            throw new TopicNotFoundException("Did not find topic with id - " + id);
        }
        return topic;
    }
}