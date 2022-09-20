package com.bookdiscovery.userservice.dtotests;

import com.bookdiscovery.userservice.dto.UserDto;
import com.bookdiscovery.userservice.entity.UserBooks;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.util.ArrayList;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

class UserDtoTests {

    @Autowired
    private TestEntityManager entityManager;

    @DisplayName("Test user dto")
    @Test
    void testUserDto() {
        UserDto user = new UserDto();

        int userId = 1;

        user.setUserId(userId);
        user.setFirstName("Bhavani");
        user.setLastName("Somanchi");
        user.setImage("Mock image");
        user.setUserBooks(new ArrayList<UserBooks>());

        assertThat(user).isNotNull();

        assertThat(user.getUserId()).isEqualTo(userId);
        assertThat(user.getFirstName()).isEqualTo("Bhavani");
        assertThat(user.getLastName()).isEqualTo("Somanchi");
        assertThat(user.getImage()).isEqualTo("Mock image");
        assertThat(user.getUserBooks()).isEqualTo(new ArrayList<UserBooks>());

        UserDto user2 = new UserDto(2, "Ross", "Geller", "mock image", new ArrayList<UserBooks>());

        assertThat(user2).isNotNull();

        assertThat(user2.getUserId()).isEqualTo(2);
        assertThat(user2.getFirstName()).isEqualTo("Ross");
        assertThat(user2.getLastName()).isEqualTo("Geller");
        assertThat(user2.getImage()).isEqualTo("mock image");
        assertThat(user2.getUserBooks()).isEqualTo(new ArrayList<UserBooks>());
    }
}
