import axios from "axios";
import {LoginError, RegistrationError} from "../errors";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login({username, password}) {
        return axios
            .post(API_URL + "signin", {username, password})
            .then((response, reject) => {
                localStorage.setItem("user", JSON.stringify(response.data));
            })
            .catch(err => {
                if (err.response.data.msg) {
                    throw new LoginError(err.response.data.msg);
                }
                throw new LoginError('Something went wrong... please contact vendor');
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register({username, email, password}) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password,
        })
            .catch(err => {
                console.log(err.response.data);
                if (err.response.data.msg) {
                    throw new RegistrationError(err.response.data.msg);
                }
                throw new RegistrationError(`Something went wrong... please contact vendor`);
            });
    }
}

export default new AuthService();