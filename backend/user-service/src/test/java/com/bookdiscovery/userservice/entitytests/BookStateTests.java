package com.bookdiscovery.userservice.entitytests;

import com.bookdiscovery.userservice.entity.BookState;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class BookStateTests {

    @Autowired
    private TestEntityManager entityManager;

    @DisplayName("Testing book state")
    @Test
    void testBookState() {
        BookState currentState = new BookState();

        currentState.setStateId(1);
        currentState.setStateName("Currently reading");

        assertThat(currentState).isNotNull();

        assertThat(currentState.getStateId()).isEqualTo(1);
        assertThat(currentState.getStateName()).isEqualTo("Currently reading");
    }
}
