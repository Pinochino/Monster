package com.example.backend.repository;

import com.example.backend.entity.User.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {

    boolean existsByUsername(String username);

    boolean existsUserByEmailAndPassword(String email, String password);

    boolean existsUserByEmail(String email);

}
