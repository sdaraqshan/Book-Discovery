package com.bookdiscovery.categoryservice.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="topic")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="topic_id")
    private int id;

    @Column(name="topic_name")
    private String name;

    @Column(name="image")
    private String image;
}