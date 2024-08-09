package com.example.backend.service.user;


import com.example.backend.dto.UserDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
public interface UserService {

    List<UserDto> getAllUser();

    UserDto getUserById(UUID id);

    ResponseEntity<?> createUser(UserDto userDto, MultipartFile file) throws IOException;

    UserDto update(UUID id, UserDto userDto, MultipartFile file) throws IOException;

    String deleteUserById(UUID id) throws IOException;



    Boolean checkUserByEmailAndPassword(String email, String password);

    boolean existsByUsername(String username);
}
