package com.bookdiscovery.categoryservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TopicDTO {
    private int id;
    private String name;
    private String image;
    private List<SubTopicDTO> subtopics;
}