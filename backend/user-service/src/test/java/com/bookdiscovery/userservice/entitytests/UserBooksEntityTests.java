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

class UserBooksEntityTests {
    @Autowired
    private TestEntityManager entityManager;

    @DisplayName("Test User Books entity")
    @Test
    void testUserBooksEntity() {

        User firstUser = User.builder()
                .userId(1)
                .firstName("John")
                .lastName("Doe")
                .image("test image url1")
                .build();

        BookState currentState = BookState.builder()
                .stateId(1)
                .stateName("Currently reading")
                .build();

        UserBooks userBooks = new UserBooks();

        userBooks.setBookId(1);
        userBooks.setUser(firstUser);
        userBooks.setBookState(currentState);
        userBooks.setPagesLeft(34);
        userBooks.setRating(2.4f);
        userBooks.setReviewComment("Mock comment");

        assertThat(userBooks).isNotNull();

        assertThat(userBooks.getBookId()).isEqualTo(1);
        assertThat(userBooks.getUser()).isEqualTo(firstUser);
        assertThat(userBooks.getBookState()).isEqualTo(currentState);
        assertThat(userBooks.getRating()).isEqualTo(2.4f);
        assertThat(userBooks.getPagesLeft()).isEqualTo(34);
        assertThat(userBooks.getReviewComment()).isEqualTo("Mock comment");

        assertThat(userBooks.toString()).isNotNull();
    }
}
