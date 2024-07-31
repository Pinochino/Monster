package com.example.backend.handle;

import lombok.Getter;
import lombok.Setter;

@Getter
public enum ErrorCode {

    UNCATEGORIZED_EXCEPTION(9999, "Uncategorized exception"),
    USER_EXISTED(1000, "User have existed"),
    USER_NOT_EXISTED(1000, "User have not existed"),



    ;

    private final int code;

    private final String message;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
