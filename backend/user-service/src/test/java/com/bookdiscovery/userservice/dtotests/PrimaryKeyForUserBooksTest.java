package com.bookdiscovery.userservice.dtotests;

import com.bookdiscovery.userservice.dto.PrimaryKeyForUserBooks;
import nl.jqno.equalsverifier.EqualsVerifier;
import nl.jqno.equalsverifier.Warning;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class PrimaryKeyForUserBooksTest {

    @Autowired
    private TestEntityManager entityManager;

    @DisplayName("Test primary key for user books")
    @Test
    void testPrimaryKeyForUserBooks() {

        PrimaryKeyForUserBooks primaryKey = new PrimaryKeyForUserBooks();

        primaryKey.setUser(1);
        primaryKey.setBookId(1);

        assertThat(primaryKey).isNotNull();

        assertThat(primaryKey.getUser()).isEqualTo(1);
        assertThat(primaryKey.getBookId()).isEqualTo(1);

        PrimaryKeyForUserBooks secondPrimaryKey = new PrimaryKeyForUserBooks(2, 2);

        assertThat(secondPrimaryKey).isNotNull();

        assertThat(secondPrimaryKey.getUser()).isEqualTo(2);
        assertThat(secondPrimaryKey.getBookId()).isEqualTo(2);

        EqualsVerifier.forClass( PrimaryKeyForUserBooks.class )
                .suppress( Warning.STRICT_INHERITANCE )
                .suppress(Warning.NONFINAL_FIELDS)
                .verify();
    }

}
