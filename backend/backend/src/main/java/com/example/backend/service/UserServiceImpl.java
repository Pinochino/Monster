package com.example.backend.service;

import com.example.backend.dto.response.UserResponse;
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserServiceImpl implements UserService{

    UserRepository userRepository;

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public UserResponse getUserById(UUID id) {
        return null;
    }

    @Override
    public UserResponse update(UUID id) {
        return null;
    }

    @Override
    public void deleteUserById(UUID id) {

    }


}
