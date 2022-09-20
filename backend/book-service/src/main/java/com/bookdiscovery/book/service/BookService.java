package com.bookdiscovery.book.service;

import com.bookdiscovery.book.dto.BookDTO;

import java.util.List;

public interface BookService {
    public List<BookDTO> findAll();
    public BookDTO getBookByID(int id);
}
