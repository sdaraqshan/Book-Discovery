package com.bookdiscovery.userservice.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "book_state")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookState {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "state_id")
    private int stateId;

    @Column(name = "state_name")
    private String stateName;


}
