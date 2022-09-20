package com.bookdiscovery.categoryservice.exception;

public class SubTopicNotFoundException extends RuntimeException{
    public SubTopicNotFoundException(String message) {
        super(message);
    }
}