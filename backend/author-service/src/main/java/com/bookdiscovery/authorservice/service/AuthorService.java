package com.bookdiscovery.authorservice.service;

import com.bookdiscovery.authorservice.dto.AuthorDTO;
public interface AuthorService {

    public AuthorDTO findAuthorById(int id);

}
