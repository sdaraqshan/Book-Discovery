package com.bookdiscovery.userservice.dtotests;

import com.bookdiscovery.userservice.dto.StatusDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class StatusDTOTest {

    @Autowired
    private TestEntityManager entityManager;

    @DisplayName("Test user books dto")
    @Test
    void testStatusDTO() {

        StatusDTO statusDTO = new StatusDTO();

        statusDTO.setReading(true);
        statusDTO.setBookmarked(false);
        statusDTO.setRead(true);

        assertThat(statusDTO).isNotNull();

        assertThat(statusDTO.isReading()).isTrue();
        assertThat(statusDTO.isBookmarked()).isFalse();
        assertThat(statusDTO.isRead()).isTrue();

        StatusDTO secondStatusDTO = new StatusDTO(false, false, true);

        assertThat(secondStatusDTO).isNotNull();

        assertThat(secondStatusDTO.isReading()).isFalse();
        assertThat(secondStatusDTO.isBookmarked()).isFalse();
        assertThat(secondStatusDTO.isRead()).isTrue();

    }
}
