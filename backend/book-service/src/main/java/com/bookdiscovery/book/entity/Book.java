package com.bookdiscovery.book.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="book")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="book_id")
    private int id;

    @Column(name="book_name")
    private String title;

    @Column(name="author_id")
    private int authorId;

    @Column(name="sub_topic_id")
    private int subtopicId;

    @Column(name="release_date")
    private String releaseDate;

    @Column(name="language")
    private String language;

    @Column(name="description")
    private String description;

    @Column(name="pages")
    private int pages;

    @Column(name="image")
    private String image;
}
