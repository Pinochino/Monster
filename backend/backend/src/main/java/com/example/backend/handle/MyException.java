package com.example.backend.handle;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.io.IOException;

@ControllerAdvice
public class MyException {

//    @ExceptionHandler(value = IOException.class)
//    public ResponseEntity<String> handleAllException(IOException exception) {
//        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File processing error: " + exception.getMessage());
//    }

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> checkAll(RuntimeException e) {
        ErrorResponse error = new ErrorResponse(e.getMessage(), HttpStatus.BAD_REQUEST.value());
        return ResponseEntity.badRequest().body(error);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
    }

}
