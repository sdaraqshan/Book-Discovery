package com.bookdiscovery.userservice.entitytests;


import com.bookdiscovery.userservice.entity.BookState;
import com.bookdiscovery.userservice.entity.User;
import com.bookdiscovery.userservice.entity.UserBooks;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.ArrayList;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class UserEntityTests {
    @Autowired
    private TestEntityManager entityManager;

    @DisplayName("Test User entity")
    @Test
    void testUserEntity() {

        User user = new User();
        int userId = 1;

        user.setUserId(userId);
        user.setFirstName("Bhavani");
        user.setLastName("Somanchi");
        user.setImage("Mock image");
        user.setUserBooks(new ArrayList<UserBooks>());

        assertThat(user).isNotNull();

        assertThat(user.getUserId()).isEqualTo(userId);
        assertThat(user.getFirstName()).isEqualTo("Bhavani");
        assertThat(user.getLastName()).isEqualTo("Somanchi");
        assertThat(user.getImage()).isEqualTo("Mock image");
        assertThat(user.getUserBooks()).isEqualTo(new ArrayList<UserBooks>());

        BookState currentState = BookState.builder()
                .stateId(1)
                .stateName("Currently reading")
                .build();;

        UserBooks firstBook = UserBooks.builder()
                .bookId(1)
                .user(user)
                .bookState(currentState)
                .pagesLeft(89)
                .rating(4.5f)
                .reviewComment("Test review")
                .build();

        user.updateBookState(firstBook);
        assertThat(user.getUserBooks()).isNotNull();

    }

}
