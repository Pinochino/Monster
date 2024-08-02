package com.example.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.UUID;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    UUID Id;

    @NotBlank(message = "Please enter the user's surname")
    String surname;

    @NotBlank(message = "Please enter the user's surname")
    String username;

    @NotBlank(message = "Please enter the user's email")
    String email;

    @NotBlank(message = "Please enter the user's surname")
    String password;

    @NotBlank(message = "Please enter the user's surname")
    String repassword;

    @NotBlank(message = "Please enter the user's image")
    String poster;

    String posterUrl;

}
