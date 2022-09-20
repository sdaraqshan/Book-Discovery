package com.bookdiscovery.userservice.service;

import com.bookdiscovery.userservice.dto.UserBooksDto;

import java.util.List;

public interface UserBooksService {
    List<UserBooksDto> findAll();

    UserBooksDto findById(int userId, int bookId);

    long countBooksByState(String stateName);
}
