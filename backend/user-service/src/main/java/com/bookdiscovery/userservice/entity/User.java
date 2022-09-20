package com.bookdiscovery.userservice.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private int userId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "image")
    private String image;

    @OneToMany(fetch=FetchType.LAZY,
            mappedBy="user",
            cascade= CascadeType.ALL)
    private List<UserBooks> userBooks;

    public void updateBookState(UserBooks book) {

        if(userBooks==null){
            userBooks = new ArrayList<>();
        }
        book.setUser(this);
        userBooks.add(book);

    }

}
