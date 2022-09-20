package com.bookdiscovery.book.entity;


import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import static org.junit.jupiter.api.Assertions.assertEquals;


class BookTest {

    @Autowired
    private TestEntityManager entityManager;

    @Test
    void bookEntityTest() throws Exception {

        Book book = new Book();
        int id=1;
        String bookName = "Inorganic Chemistry";
        String bookReleaseDate = "12th September 1998";
        String bookLanguage = "English";
        String bookDescription = "Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons See more";
        int bookPages = 0;
        String bookImage = "/assets/images/books/book_large_1.png";

        book.setId(id);
        book.setTitle(bookName);
        book.setReleaseDate(bookReleaseDate);
        book.setLanguage(bookLanguage);
        book.setSubtopicId(book.getSubtopicId());
        book.setAuthorId(book.getAuthorId());
        book.setDescription(bookDescription);
        book.setPages(bookPages);
        book.setImage(bookImage);

        assertEquals(id, book.getId());
        assertEquals(bookName, book.getTitle());
        assertEquals(bookReleaseDate, book.getReleaseDate());
        assertEquals(bookLanguage, book.getLanguage());
        assertEquals(bookPages, book.getPages());
        assertEquals(bookDescription, book.getDescription());
        assertEquals(bookImage, book.getImage());

    }


}
