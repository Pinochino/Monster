package com.example.backend.service.user;

import com.example.backend.dto.UserDto;
import com.example.backend.entity.User;
import com.example.backend.mapper.UserMapper;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.file.FileService;
import jakarta.transaction.Transactional;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserServiceImpl implements UserService {
    UserRepository userRepository;
    UserMapper userMapper;
    FileService fileService;
    String baseUrl;
    String path;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper, FileService fileService,
                           @Value(value = "${base.url}") String baseUrl,
                           @Value("${project.poster}") String path) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.fileService = fileService;
        this.baseUrl = baseUrl;
        this.path = path;
    }

    @Override
    public List<UserDto> getAllUser() {
        // 1. fetch all db from DB
        List<User> list = userRepository.findAll();

        List<UserDto> userDtos = new ArrayList<>();
        // 2.Iterate through the list, generate posterUrl for each movie obj,
        for (User user : list) {
            String posterUrl = baseUrl + "/file/" + user.getPoster();
            UserDto userDto = new UserDto(
                    user.getId(),
                    user.getSurname(),
                    user.getUsername(),
                    user.getEmail(),
                    user.getPassword(),
                    user.getRepassword(),
                    user.getPoster(),
                    posterUrl
            );
            userDtos.add(userDto);
        }

        return userDtos;
    }

    @Override
    public UserDto getUserById(UUID id) {

        // 1. Check the data in DB and if exits, fetch the data or given DB
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found the user"));

        // 2. Generate posterUrl
        String posterUrl = baseUrl + "/file/" + user.getPoster();

        // 3. Map to UserDto object and return it
        UserDto userDto = new UserDto(
                user.getId(),
                user.getSurname(),
                user.getUsername(),
                user.getEmail(),
                user.getPassword(),
                user.getRepassword(),
                user.getPoster(),
                posterUrl
        );

        return userDto;
    }

    @Override
    @Transactional
    public UserDto createUser(UserDto userDto, MultipartFile file) throws IOException {

        // upload the file
        String uploadedFileName = fileService.uploadFile(path, file);

        // set the value of the field 'poster' as filename
        userDto.setPoster(uploadedFileName);

        // map UserCreationRequest to User object
        User user = new User(
                null,
                userDto.getSurname(),
                userDto.getUsername(),
                userDto.getEmail(),
                userDto.getPassword(),
                userDto.getRepassword(),
                userDto.getPoster()
        );
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        user.setRepassword(passwordEncoder.encode(userDto.getPassword()));


        // save the user object -> saved User object
        User savedUser = userRepository.save(user);

        // generate the posterUrl
        return getUserResponse(uploadedFileName, savedUser);
    }

    @Override
    public UserDto update(UUID id, UserDto userDto, MultipartFile file) throws IOException {
        // 1. Check if user object exists with given id
        User mv = userRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found the user"));


        // 2. if file is null, do nothing
        // if file is not null, then delete existing file associated with the record
        // and upload the new file
        String fileName = mv.getPoster();

        if (file != null) {
            Files.deleteIfExists(Paths.get(path + File.separator + fileName));
            fileName = fileService.uploadFile(path, file);

        }
        // 3.set userDto's poster value, according to step 2
        userDto.setPoster(fileName);

        // 4. map it to User object
        User user = new User(
                mv.getId(),
                userDto.getSurname(),
                userDto.getUsername(),
                userDto.getEmail(),
                userDto.getPassword(),
                userDto.getRepassword(),
                userDto.getPoster()
        );
        // 5.save the user object -> return saved user object
        User updateUser = userRepository.save(user);

        // 6. generate posterUrl for it
        String posterUrl = baseUrl + "/file/" + fileName;


        // 7. map to UserDto and return it
        UserDto response = new UserDto(
                user.getId(),
                user.getSurname(),
                user.getUsername(),
                user.getEmail(),
                user.getPassword(),
                user.getRepassword(),
                user.getPoster(),
                posterUrl
        );

        return response;
    }

    private UserDto getUserResponse(String uploadedFileName, User savedUser) {
        String posterUrl = baseUrl + "/file/" + uploadedFileName;

        return new UserDto(
                savedUser.getId(),
                savedUser.getSurname(),
                savedUser.getUsername(),
                savedUser.getEmail(),
                savedUser.getPassword(),
                savedUser.getRepassword(),
                savedUser.getPoster(),
                posterUrl
        );
    }


    @Override
    @Transactional
    public String deleteUserById(UUID id) throws IOException {
        // 1. check if user object exits in DB
        User mv = userRepository.findById(id).orElseThrow(() -> new RuntimeException("Not found the user"));

        // 2. delete the file associated with this object
        Files.deleteIfExists(Paths.get(path + File.separator + mv.getPoster()));

        // 3. delete the user object
        userRepository.delete(mv);

        return "User deleted with id: " + id;
    }

    @Override
    public Boolean checkUserByEmailAndPassword(@RequestParam String email,
                                               @RequestParam String password) {
        if (!userRepository.existsUserByEmailAndPassword(email, password)) {
            return false;
        }
        return true;
    }


}
