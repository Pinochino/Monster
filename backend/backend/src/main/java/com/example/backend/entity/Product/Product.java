package com.example.backend.entity.Product;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    UUID ProductId;

    String ProductName;

    String ProductImage;

    String ProductDetails;


}
