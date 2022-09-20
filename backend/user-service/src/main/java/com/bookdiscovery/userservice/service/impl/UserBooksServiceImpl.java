package com.bookdiscovery.userservice.service.impl;

import com.bookdiscovery.userservice.dto.PrimaryKeyForUserBooks;
import com.bookdiscovery.userservice.dto.UserBooksDto;
import com.bookdiscovery.userservice.dtomapper.UserDtoMapper;
import com.bookdiscovery.userservice.entity.BookState;
import com.bookdiscovery.userservice.entity.UserBooks;
import com.bookdiscovery.userservice.exception.UserBooksNotFoundException;
import com.bookdiscovery.userservice.repository.BookStateRepository;
import com.bookdiscovery.userservice.repository.UserBooksRepository;
import com.bookdiscovery.userservice.service.UserBooksService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class UserBooksServiceImpl implements UserBooksService {

    @Autowired
    private UserBooksRepository userBooksRepository;

    @Autowired
    private UserDtoMapper userDtoMapper;

    @Autowired
    private BookStateRepository bookStateRepository;

    @Override
    public List<UserBooksDto> findAll() {
        List<UserBooks> userBooks = userBooksRepository.findAll();
        List<UserBooksDto> userBooksDtos = new ArrayList<>();
        for (UserBooks user: userBooks) {
            UserBooksDto userBookDto = userDtoMapper.userBooksEntityToDto(user);
            userBooksDtos.add(userBookDto);
        }
        return userBooksDtos;
    }

    @Override
    public UserBooksDto findById(int userId, int bookId) {
        Optional<UserBooks> userBook = userBooksRepository.findById(new PrimaryKeyForUserBooks(userId,bookId));
        UserBooksDto userBookDto;
        if(userBook.isPresent()){
        userBookDto = userDtoMapper.userBooksEntityToDto(userBook.get());
        }
        else {
            log.error("Cannot find user with user id: " + userId + " or book with book id: " + bookId);
            throw new UserBooksNotFoundException("Unable to find user or book");
        }
        return userBookDto;
    }

    @Override
    public long countBooksByState(String stateName) {
        Optional<BookState> state  = Optional.ofNullable(bookStateRepository.findByStateName(stateName.toLowerCase()));
        if(state.isPresent()) {
            return userBooksRepository.countByBookState(state.get());
        }
        return 0;
    }


}
