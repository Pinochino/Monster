package com.example.backend.controller;

import com.example.backend.dto.UserDto;
import com.example.backend.service.user.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class UserController {

    private  final  UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public ResponseEntity<List<UserDto>> getAllUser(){
        return ResponseEntity.ok(userService.getAllUser());
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable UUID id){
        UserDto response = userService.getUserById(id);
        return ResponseEntity.ok(response);
    }

    @PostMapping(value = "/user", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<UserDto> createUser(@RequestPart() String request,
                                                   @RequestPart() MultipartFile file) throws IOException {
       UserDto userResponse = convertToUserResponse(request);
       return new ResponseEntity<>(userService.createUser(userResponse, file), HttpStatus.CREATED);
    }

    private UserDto convertToUserResponse(String userDto) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.readValue(userDto, UserDto.class);
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<UserDto> updateUserById(@PathVariable UUID id, @RequestPart MultipartFile file,
                                                  @RequestPart String request) throws IOException {
       if (file.isEmpty()) file = null;
        UserDto userDto =  convertToUserResponse(request);
        return ResponseEntity.ok(userService.update(id, userDto, file));
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUserById(@PathVariable UUID id) throws IOException {
        return ResponseEntity.ok(userService.deleteUserById(id));
    }

    @PostMapping("/check")
    public ResponseEntity<Boolean> checkUserByEmailAndPassword(String email, String password){
        if (email == null || password == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        try {
            boolean exists = userService.checkUserByEmailAndPassword(email, password);
            return ResponseEntity.ok(exists);

        } catch (Exception e){
            throw e;
        }

    }
}
