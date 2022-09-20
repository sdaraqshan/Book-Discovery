package com.bookdiscovery.book.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookDTO {

    private int id;
    private String title;
    private AuthorDTO authorDTO;
    private CategoryDTO categoryDTO;
    private String releaseDate;
    private String language;
    private String description;
    private int pages;
    private String image;
}
