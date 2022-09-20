package com.bookdiscovery.userservice.dto;

import com.bookdiscovery.userservice.entity.BookState;
import com.bookdiscovery.userservice.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserBooksDto {
    private int bookId;
    private User user;
    private BookState bookState;
    private int pagesLeft;
    private float rating ;
    private String reviewComment;
    private StatusDTO status;

    public UserBooksDto(int bookId, User user, BookState bookState, int pagesLeft, float rating, String reviewComment) {
        this.bookId = bookId;
        this.user = user;
        this.bookState = bookState;
        this.pagesLeft = pagesLeft;
        this.rating = rating;
        this.reviewComment = reviewComment;
        this.status = new StatusDTO(false, false, false);
    }
    public UserBooksDto(){
        this.status = new StatusDTO(false, false, false);
    }

}



