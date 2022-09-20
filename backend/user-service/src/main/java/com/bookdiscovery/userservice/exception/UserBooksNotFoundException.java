package com.bookdiscovery.userservice.exception;

public class UserBooksNotFoundException extends RuntimeException {

    public UserBooksNotFoundException(String message) {
        super(message);
    }

    public UserBooksNotFoundException(Throwable e) {
        super(e);
    }
}
