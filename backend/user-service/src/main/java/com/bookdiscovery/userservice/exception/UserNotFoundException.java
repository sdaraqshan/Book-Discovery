package com.bookdiscovery.userservice.exception;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String message) {
        super(message);
    }

    public UserNotFoundException(Throwable e) {
        super(e);
    }
}
