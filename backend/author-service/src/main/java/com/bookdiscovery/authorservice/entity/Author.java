package com.bookdiscovery.authorservice.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="author")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="author_id")
    private int id;

    @Column(name="author_name")
    private String name;

    @Column(name = "about_author")
    private String description;

    @Column(name = "image")
    private String image;

}