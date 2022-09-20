package com.bookdiscovery.userservice.service;

import com.bookdiscovery.userservice.dto.UserDto;

import java.util.List;

public interface UserService {
    List<UserDto> findAll();

    UserDto findById(int userId);

    void updateUserBook(int userId, int bookId, String stateName);
}
