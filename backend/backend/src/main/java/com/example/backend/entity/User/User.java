package com.example.backend.entity.User;

import com.example.backend.entity.Product.Product;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;
import java.util.UUID;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Customer")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    UUID Id;

    @Column(length = 100)
    @NotBlank(message = "Please enter the user's surname")
    String surname;

    @Column(length = 100)
    @NotBlank(message = "Please enter the user's surname")
    String username;

    @Column(length = 100)
    @NotBlank(message = "Please enter the user's email")
    String email;

    @Column(length = 100)
    @NotBlank(message = "Please enter the user's surname")
    String password;

    @Column(length = 100)
    @NotBlank(message = "Please enter the user's surname")
    String repassword;

    @NotBlank(message = "Please enter the user's image")
    String poster;

    List<Product> productList;
}
