package com.bookdiscovery.userservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class StatusDTO {

    private boolean isReading;
    private boolean isBookmarked;
    private boolean isRead;
}
