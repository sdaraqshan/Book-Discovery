package com.bookdiscovery.book.dto;

import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class BookDTOTest {

    @Test
        public void BookDTOTest() throws Exception{

            AuthorDTO authorDTO = new AuthorDTO();

            int authorId = 1;
            String authorName = "J D Lee";
            String authorDescription = "John Lee was a Senior Lecturer in the Department of Chemistry at Loughborough University, Leicestershire, UK and has authored many books and journal articles. ... Tech in ceramic engineering from Calcutta University and M. Tech from IIT Kanpur.";
            String authorImage = "/assets/images/topics/avatar_large_1.png";

            authorDTO.setId(authorId);
            authorDTO.setName(authorName);
            authorDTO.setDescription(authorDescription);
            authorDTO.setImage(authorImage);

            assertThat(authorDTO).isNotNull();

            assertEquals(authorDTO.getId(),authorId);
            assertEquals(authorDTO.getName(), authorName);
            assertEquals(authorDTO.getDescription(), authorDescription);
            assertEquals(authorDTO.getImage(), authorImage);

            CategoryDTO categoryDTO = new CategoryDTO();

            int categoryId = 1;
            String categoryName = "Chemistry";

            categoryDTO.setId(categoryId);
            categoryDTO.setName(categoryName);

            assertThat(categoryDTO).isNotNull();

            assertEquals(categoryId, categoryDTO.getId());
            assertEquals(categoryName, categoryDTO.getName());

            BookDTO book = new BookDTO();

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
            book.setAuthorDTO(authorDTO);
            book.setCategoryDTO(categoryDTO);
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
