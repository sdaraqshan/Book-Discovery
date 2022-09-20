package com.bookdiscovery.categoryservice.service.impl;

import com.bookdiscovery.categoryservice.dto.SubTopicDTO;
import com.bookdiscovery.categoryservice.entity.SubTopic;
import com.bookdiscovery.categoryservice.exception.SubTopicNotFoundException;
import com.bookdiscovery.categoryservice.repository.SubTopicRepository;
import com.bookdiscovery.categoryservice.service.SubTopicService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SubTopicServiceImpl implements SubTopicService {

    @Autowired
    private SubTopicRepository subTopicRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public SubTopicDTO findSubTopicById(int id) {
        Optional<SubTopic> result = subTopicRepository.findById(id);
        SubTopicDTO subTopic;
        if(result.isPresent()) {
            subTopic = modelMapper.map(result.get(), SubTopicDTO.class);
        }
        else {
            throw new SubTopicNotFoundException("Did not find subtopic with id - " + id);
        }
        return subTopic;
    }
}