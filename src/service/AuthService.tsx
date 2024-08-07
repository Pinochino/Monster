import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/user";

export const registerAPICall = (registerObj) => {

    const fomData = new FormData();
    fomData.append('request', JSON.stringify({
        surname: registerObj.surname,
        username: registerObj.username,
        email: registerObj.email,
        password: registerObj.password,
        checkPassword: registerObj.checkPassword,
    }));

    fomData.append('file', registerObj.image);


    return axios.post(AUTH_REST_API_BASE_URL, FormData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}



