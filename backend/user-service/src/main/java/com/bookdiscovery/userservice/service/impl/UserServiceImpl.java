package com.bookdiscovery.userservice.service.impl;

import com.bookdiscovery.userservice.dto.UserDto;
import com.bookdiscovery.userservice.dtomapper.UserDtoMapper;
import com.bookdiscovery.userservice.entity.BookState;
import com.bookdiscovery.userservice.entity.User;
import com.bookdiscovery.userservice.entity.UserBooks;
import com.bookdiscovery.userservice.exception.UserNotFoundException;
import com.bookdiscovery.userservice.repository.BookStateRepository;
import com.bookdiscovery.userservice.repository.UserRepository;
import com.bookdiscovery.userservice.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BookStateRepository bookStateRepository;

    @Autowired
    private UserDtoMapper userDtoMapper;

    @Override
    public List<UserDto> findAll() {
        log.info("Inside findAll users");
        List<User> users = userRepository.findAll();
        List<UserDto> userDtos = new ArrayList<>();
        for (User user: users) {
            UserDto userDto = userDtoMapper.userEntityToDto(user);
            userDtos.add(userDto);
        }
        return userDtos;
    }

    @Override
    public UserDto findById(int userId) {
        log.info("Inside find by id in user service");
        Optional<User> user = userRepository.findById(userId);
        UserDto userDto;

        if(user.isPresent()){
        userDto = userDtoMapper.userEntityToDto(user.get());

        }
        else {
            log.error("Cannot find user of id: " + userId);
            throw new UserNotFoundException("Cannot find user of id: " + userId);
        }
        return userDto;
    }

    @Override
    public void updateUserBook(int userId, int bookId, String stateName) {
        log.info("Inside update user book");
        User user = userRepository.findById(userId).orElse(null);

        Optional<BookState> state  = Optional.ofNullable(bookStateRepository.findByStateName(stateName.toLowerCase()));

        if(state.isPresent() && user!=null) {
            user.updateBookState(new UserBooks(bookId, user,state.get(),100,4,"" ));

        }
        else {
            throw new UserNotFoundException("Unable to add user");
        }

        userRepository.save(user);
    }

}
