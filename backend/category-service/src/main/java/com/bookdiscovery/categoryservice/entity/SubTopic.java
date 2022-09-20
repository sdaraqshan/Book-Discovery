package com.bookdiscovery.categoryservice.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="sub_topic")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SubTopic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="sub_topic_id")
    private int id;

    @Column(name="sub_topic_name")
    private String name;

    @Column(name = "topic_id")
    private int topicId;

}