package com.bookdiscovery.userservice.entity;

import com.bookdiscovery.userservice.dto.PrimaryKeyForUserBooks;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "user_books")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@IdClass(PrimaryKeyForUserBooks.class)
public class UserBooks {

    @Id
    @Column(name = "book_id")
    private int bookId;

    @Id
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_id")
    private User user;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "state_id")
    private BookState bookState;

    @Column(name = "pages_left")
    private int pagesLeft;

    @Column(name = "rating")
    private float rating ;

    @Column(name = "review_comment")
    private String reviewComment;


}
