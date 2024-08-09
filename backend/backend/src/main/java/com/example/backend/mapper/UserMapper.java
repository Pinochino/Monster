//package com.example.backend.mapper;
//
//
//import com.example.backend.dto.UserDto;
//import com.example.backend.entity.User.User;
//import org.mapstruct.Mapper;
//import org.mapstruct.Mapping;
//import org.mapstruct.MappingTarget;
//
//@Mapper(componentModel = "spring")
//public interface UserMapper {
//
//    UserDto toUser(User request);
//
//
//    @Mapping(target = "id", ignore = true)
//    void updateUser(@MappingTarget User user, UserDto request);
//
//}
