import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  const API_URL = "http://localhost:3000/auth/login";

  axios
    .post(API_URL, {
      username: data.username,
      password: data.password,
      expiresInMins: data.expiresInMins,
    })
    .then((res) => {
        callback(true, res.data.accessToken)
    })
    .catch((err) =>
        callback(false, err)
    );
};

export const getUsername = (accessToken) => {
    const decoded = jwtDecode(accessToken)
    return decoded.username
}
