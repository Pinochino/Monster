package com.example.backend.service;


import com.example.backend.dto.response.UserResponse;
import com.example.backend.entity.User;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.UUID;

@Service
public interface UserService {

    List<User> getAllUser();

    UserResponse getUserById(UUID id);

    UserResponse update(UUID id);

    void deleteUserById(UUID id);
}
