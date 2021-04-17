import {LoginError, RegistrationError} from "../errors";
import {catchError, client} from './client';

const login = ({email, password}) => {
    return client.post("/auth/signin", {email, password})
        .then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log(response.data);
            return response.data;
        })
        .catch(catchError(LoginError));
};

const logout = () => localStorage.removeItem("user");

const register = ({username, email, password, isAdmin}) => {
    return client.post("/auth/signup", {username, email, password, isAdmin})
        .catch(catchError(RegistrationError));
};

export default {
    login,
    logout,
    register,
}