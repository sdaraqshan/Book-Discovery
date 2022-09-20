package com.bookdiscovery.userservice.controller;

import com.bookdiscovery.userservice.dto.UserBooksDto;
import com.bookdiscovery.userservice.dto.UserDto;
import com.bookdiscovery.userservice.service.UserBooksService;
import com.bookdiscovery.userservice.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    private UserBooksService userBooksService;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public List<UserDto> getUsers(){

        try {
            log.info("Inside user controller");
            return userService.findAll();
        }
        catch( Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No users found");
        }
    }

    @GetMapping("/{userId}")
    public UserDto getUserById(@PathVariable int userId) {
        try {
            log.info("INSIDE GET USER BY ID << -----");
            log.info("ID value: "+ userId);
            return userService.findById(userId);
        }
        catch (Exception e){
            log.info("In error");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No user found with the given id");
        }
    }

    @GetMapping("/{userId}/books/{bookId}")
    public UserBooksDto getUserBooksById(@PathVariable int userId, @PathVariable int bookId){
        try {
            log.info("INSIDE GET USER BY ID << -----");
            log.info("ID value: "+ userId);
            return userBooksService.findById(userId, bookId);
        }
        catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No user or book found with the given id");
        }
    }

    @PostMapping("/{userId}/books/{bookId}")
    public void postUserBooksById(@PathVariable int userId, @PathVariable int bookId,
                                  @RequestParam(required = false, value = "stateName") String stateName){
        try{
            log.info("Updating state of bookId: " + bookId + " and userId: " + userId + "with statename: " + stateName);
            userService.updateUserBook(userId,bookId,stateName);
        }
        catch (Exception e){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unable to update user");
        }
    }

    @GetMapping("/bookState")
    public List<UserBooksDto> getUserBooks(){

        try {
            log.info("Inside user controller");
            return userBooksService.findAll();
        }
        catch( Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No user books found");
        }
    }

    @GetMapping("/trackerCount")
    public long getTrackerCount(@RequestParam(required = true) String stateName){
        return userBooksService.countBooksByState(stateName);
    }
}