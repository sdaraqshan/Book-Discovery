package com.bookdiscovery.userservice.dto;

import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class PrimaryKeyForUserBooks implements Serializable {
    private int user;
    private int bookId;
}
