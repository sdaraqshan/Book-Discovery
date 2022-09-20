package com.bookdiscovery.userservice.dto;

import com.bookdiscovery.userservice.entity.UserBooks;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class UserDto {
    private int userId;
    private String firstName;
    private String lastName;
    private String image;
    private List<UserBooks> userBooks;

    public UserDto(int userId, String firstName, String lastName, String image, List<UserBooks> userBooks) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.userBooks = userBooks;
    }

    public UserDto() {
    }
}
