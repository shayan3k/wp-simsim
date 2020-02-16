import axios from "axios";
import secureStorage from "../services/Storage";

//Move to Process.env
const SECRET_KEY = "my secret key";

const url = "http://localhost/wordpress/wp-json";

export const JWTLogin = async data => {
  return axios
    .post(url + "/jwt-auth/v1/token", data)
    .then(res => {
      secureStorage.setItem("jwt", res.data.token);
      secureStorage.setItem("niceName", res.data.user_nicename);
      secureStorage.setItem("username", data.username);
      secureStorage.setItem("password", data.password);
      secureStorage.setItem("email", res.data.user_email);
      console.log(res);
      return {
        token: res.data.token,
        status: res.status,
        email: res.data.user_email,
        niceName: res.data.user_nicename
      };
    })
    .catch(err => {
      return {
        status: err.response.status,
        message: err.response.data.message
      };
    });
};

export const JWTLogout = () => {
  secureStorage.clear();
  window.location.href = "/wordpress/";
};

export const JWTValidate = async () => {
  console.log(JWTHeader());
  return await axios
    .post(url + "/jwt-auth/v1/token/validate", {}, JWTHeader())
    .then(res => {
      console.log(res);
      return {
        status: res.status
      };
    })
    .catch(err => {
      console.log(err.response);
      return {
        status: err.response.status
      };
    });
};

export const JWTCheck = async () => {
  return new Promise((resolve, reject) => {
    if (secureStorage.getItem("jwt")) {
      JWTValidate().then(data => {
        if (data.status === 200) resolve({ status: 200 });
        else reject({ status: 201 });
      });
    } else reject({ status: 201 });
  });
};

export const JWTHeader = () => {
  return {
    headers: { Authorization: "Bearer " + secureStorage.getItem("jwt") }
  };
};
