package com.example.backend.dto.request;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.UUID;

@Data
public class UserCreationRequest {

    @Size(message = "SURNAME_INVALID", min = 10)
    String surname;

    @Size(message = "NAME_INVALID", min = 10)
    String username;

    @Size(message = "EMAIL_INVALID", min = 10)
    String email;

    @Size(message = "PASSWORD_INVALID", min = 8)
    String password;

    @Size(message = "REPASSWORD_INVALID", min = 8)
    String repassword;
}
