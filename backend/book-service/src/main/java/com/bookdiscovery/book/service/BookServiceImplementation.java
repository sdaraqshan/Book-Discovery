package com.bookdiscovery.book.service;

import com.bookdiscovery.book.dto.AuthorDTO;
import com.bookdiscovery.book.dto.BookDTO;
import com.bookdiscovery.book.dto.CategoryDTO;
import com.bookdiscovery.book.entity.Book;
import com.bookdiscovery.book.exception.BookNotFoundException;
import com.bookdiscovery.book.repository.BookRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class BookServiceImplementation implements BookService {

    Logger logger = LoggerFactory.getLogger(BookServiceImplementation.class);

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private RestTemplate restTemplate;

    @Value("${author.url}")
    private String authorUrl;

    @Value("${category.url}")
    private String categoryUrl;

    private HashMap<Integer, AuthorDTO> authorMap = new HashMap<>();
    private HashMap<Integer, CategoryDTO> categoryMap = new HashMap<>();

    @Override
    public List<BookDTO> findAll() {
        List<Book> books = bookRepository.findAll();
        List<BookDTO> bookDTOS;

        bookDTOS = books.stream()
                .map(this::getBookDTO)
                .collect(Collectors.toList());

        return bookDTOS;
    }
    
    public BookDTO getBookDTO(Book book) {
        BookDTO bookDTO = modelMapper.map(book, BookDTO.class);

        int authorId = book.getAuthorId();
        int subtopicId = book.getSubtopicId();

        if(authorMap.containsKey(authorId))
            bookDTO.setAuthorDTO(authorMap.get(authorId));
        else {
            AuthorDTO authorDTO = restTemplate.getForObject(authorUrl + authorId,AuthorDTO.class);
            authorMap.put(authorId, authorDTO);
            bookDTO.setAuthorDTO(authorDTO);
        }

        if(categoryMap.containsKey(subtopicId))
            bookDTO.setCategoryDTO(categoryMap.get(subtopicId));
        else
        {
            CategoryDTO categoryDTO = restTemplate.getForObject(categoryUrl + book.getSubtopicId(),CategoryDTO.class);
            categoryMap.put(subtopicId, categoryDTO);
            bookDTO.setCategoryDTO(categoryDTO);
        }
        return bookDTO;
    }

    @Override
    public BookDTO getBookByID(int id){
        Optional<Book> result = bookRepository.findById(id);
        BookDTO book;

        if(result.isPresent()) {
            book = getBookDTO(result.get());

        }
        else {
            logger.error("Did not find book");
            throw new BookNotFoundException("Did not find book with id - " + id);
        }
        return book;
    }
}
