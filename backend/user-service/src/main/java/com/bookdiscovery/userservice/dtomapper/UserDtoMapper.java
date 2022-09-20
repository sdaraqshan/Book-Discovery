package com.bookdiscovery.userservice.dtomapper;

import com.bookdiscovery.userservice.dto.UserBooksDto;
import com.bookdiscovery.userservice.dto.UserDto;
import com.bookdiscovery.userservice.entity.BookState;
import com.bookdiscovery.userservice.entity.User;
import com.bookdiscovery.userservice.entity.UserBooks;

import org.springframework.stereotype.Service;

@Service
public class UserDtoMapper {

    public UserDto userEntityToDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setUserBooks(user.getUserBooks());
        return userDto;
    }

    public UserBooksDto userBooksEntityToDto(UserBooks userBooks) {
        BookState state = userBooks.getBookState();
        UserBooksDto userBooksDto = new UserBooksDto();
        userBooksDto.setBookId(userBooks.getBookId());
        userBooksDto.setBookState(state);
        userBooksDto.setReviewComment(userBooks.getReviewComment());
        userBooksDto.setRating(userBooks.getRating());
        userBooksDto.setPagesLeft(userBooks.getPagesLeft());

        if(state.getStateName().equalsIgnoreCase("Bookmarked"))
        {
            userBooksDto.getStatus().setBookmarked(true);
            userBooksDto.getStatus().setReading(false);
            userBooksDto.getStatus().setRead(false);
        }
        else if(state.getStateName().equalsIgnoreCase("Reading"))
        {
            userBooksDto.getStatus().setReading(true);
            userBooksDto.getStatus().setBookmarked(false);
            userBooksDto.getStatus().setRead(false);
        }
        else if(state.getStateName().equalsIgnoreCase("Idle")){
            userBooksDto.getStatus().setReading(false);
            userBooksDto.getStatus().setBookmarked(false);
            userBooksDto.getStatus().setRead(false);
        }
        else {
            userBooksDto.getStatus().setReading(false);
            userBooksDto.getStatus().setBookmarked(false);
            userBooksDto.getStatus().setRead(true);
        }

        return userBooksDto;
    }
}
