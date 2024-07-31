package com.example.backend.handle;

import com.example.backend.dto.response.ApiResponse;
import com.example.backend.entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class MyException {

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<ApiResponse> handleAllException(Exception exception){
        ApiResponse response = new ApiResponse();

        response.setCode(ErrorCode.UNCATEGORIZED_EXCEPTION.getCode());
        response.setMessage(ErrorCode.UNCATEGORIZED_EXCEPTION.getMessage());

        return ResponseEntity.badRequest().body(response);
    }


}
