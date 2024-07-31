package com.example.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.UUID;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    UUID Id;

    @Column(length = 100)
    @NotBlank(message = "Please enter the user's surname")
    String surname;

    @Column(length = 100)
    @NotBlank(message = "Please enter the user's surname")
    String name;

    @Column(length = 100)
    @NotBlank(message = "Please enter the user's surname")
    String password;

    @Column(length = 100)
    @NotBlank(message = "Please enter the user's surname")
    String repassword;


}
