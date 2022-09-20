package com.bookdiscovery.categoryservice.service;

import com.bookdiscovery.categoryservice.dto.SubTopicDTO;
import com.bookdiscovery.categoryservice.entity.SubTopic;
import com.bookdiscovery.categoryservice.exception.SubTopicNotFoundException;
import com.bookdiscovery.categoryservice.repository.SubTopicRepository;
import com.bookdiscovery.categoryservice.service.impl.SubTopicServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class SubTopicServiceImplTest {

    @InjectMocks
    private SubTopicService subTopicService = new SubTopicServiceImpl();

    @Mock
    private SubTopicRepository subTopicRepository;

    @Mock
    private ModelMapper modelMapper;

    private ModelMapper mapper;

    @BeforeEach
    public void setup() {
        this.mapper = new ModelMapper();
    }

    @Test
    void ShouldReturnSubTopicWhenGivenExistingIdTest() {
        SubTopic subTopic = new SubTopic(1, "Algebra & linear algebra", 1);
        SubTopicDTO subTopicDTO = this.mapper.map(subTopic, SubTopicDTO.class);
        when(subTopicRepository.findById(1)).thenReturn(Optional.of(subTopic));
        when(modelMapper.map(subTopic, SubTopicDTO.class)).thenReturn(subTopicDTO);
        assertEquals(subTopicDTO, subTopicService.findSubTopicById(1));
    }

    @Test
    void ShouldThrowExceptionWhenGivenNonExistingIdTest() {
        Optional<SubTopic> subTopic = Optional.empty();
        when(subTopicRepository.findById(0)).thenReturn(subTopic);
        RuntimeException thrown = Assertions.assertThrows(SubTopicNotFoundException.class, () -> {
            subTopicService.findSubTopicById(0);
        });
        Assertions.assertEquals("Did not find subtopic with id - " + 0, thrown.getMessage());
    }
}