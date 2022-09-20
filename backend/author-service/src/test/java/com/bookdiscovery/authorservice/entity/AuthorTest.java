package com.bookdiscovery.authorservice.entity;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

class AuthorTest {
    @Autowired
    private TestEntityManager entityManager;

    @Test
    void authorEntityTest() {

        Author author = new Author();
        author.setId(17);

        author.setName("JK Rowling");
        author.setDescription("Joanne Rowling CH OBE FRSL, also known by her pen name J. K. Rowling, is a British author and philanthropist.");
        author.setImage("/assets/images/topics/avatar_large_1.png");
        Assertions.assertEquals( "JK Rowling", author.getName());
        Assertions.assertEquals("Joanne Rowling CH OBE FRSL, also known by her pen name J. K. Rowling, is a British author and philanthropist.", author.getDescription());
        Assertions.assertEquals(17, author.getId());
        Assertions.assertEquals("/assets/images/topics/avatar_large_1.png", author.getImage());
    }
}