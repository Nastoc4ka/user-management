import axios from "axios";
import RegistrationError from "../errors/RegistrationError";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login({username, password}) {
        return axios
            .post(API_URL + "signin", {username, password})
            .then((response, reject) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                throw new Error(`failed to create habit ${response.status}`);
            })
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
                if (err.response.data.message) {
                    throw new RegistrationError(err.response.data.message);
                }
                throw new RegistrationError(`Something went wrong... please contact vendor`);
            });
    }
}

export default new AuthService();