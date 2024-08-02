package com.example.backend.handle;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ErrorResponse {

    int error;
    Long timespan;
    String message;



    public ErrorResponse(String message, int error) {
        this.error = error;
        this.timespan = System.currentTimeMillis();
        this.message = message;
    }
}
