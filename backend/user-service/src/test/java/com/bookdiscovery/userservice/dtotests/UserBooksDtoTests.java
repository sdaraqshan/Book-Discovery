package com.bookdiscovery.userservice.dtotests;

import com.bookdiscovery.userservice.dto.UserBooksDto;
import com.bookdiscovery.userservice.entity.BookState;
import com.bookdiscovery.userservice.entity.User;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class UserBooksDtoTests {

    @Autowired
    private TestEntityManager entityManager;

    @DisplayName("Test user books dto")
    @Test
    void testUserBooksDto() {

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

        User secondUser = User.builder()
                .userId(2)
                .firstName("Emily")
                .lastName("Geller")
                .image("test image url 2")
                .build();

        BookState toReadState = BookState.builder()
                .stateId(2)
                .stateName("Books to read")
                .build();

        UserBooksDto userBooks = new UserBooksDto();

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

        UserBooksDto secondUserBook = new UserBooksDto(2, secondUser, toReadState, 23, 3.4f, "mock comment");

        assertThat(secondUserBook).isNotNull();

        assertThat(secondUserBook.getBookId()).isEqualTo(2);
        assertThat(secondUserBook.getUser()).isEqualTo(secondUser);
        assertThat(secondUserBook.getBookState()).isEqualTo(toReadState);
        assertThat(secondUserBook.getRating()).isEqualTo(3.4f);
        assertThat(secondUserBook.getPagesLeft()).isEqualTo(23);
        assertThat(secondUserBook.getReviewComment()).isEqualTo("mock comment");

    }
}
