import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useStoreState, useStoreActions } from "easy-peasy";
import Message from "./Message";
import { JWTLogin, JWTLogout, JWTCheck } from "../services/Auth";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const googleToken = useStoreState(state => state.google.token);

  const logedIn = useStoreState(state => state.auth.logedIn);
  const setLogedIn = useStoreActions(actions => actions.auth.setLogedIn);

  const userEmail = useStoreState(state => state.auth.userEmail);
  const setEmail = useStoreActions(actions => actions.auth.setEmail);

  const niceName = useStoreState(state => state.auth.niceName);
  const setNiceName = useStoreActions(actions => actions.auth.setNiceName);

  const setMsg = useStoreActions(actions => actions.message.setMsg);
  const setStatus = useStoreActions(actions => actions.message.setStatus);
  const setError = useStoreActions(actions => actions.message.setError);

  const disableLoginBtn = () =>
    (document.getElementById("loginbtn").style.cssText =
      "opacity: .3;pointer - events : none;");
  const enableLoginBtn = () =>
    (document.getElementById("loginbtn").style.cssText =
      "opacity: 1;pointer - events : none;");

  // Function that will be called to refresh authorization

  const loginRequest = async e => {
    e.preventDefault();
    disableLoginBtn();
    // Must be moved to process.env file in production mode
    var url = "http://localhost/wordpress/wp-json";
    // Must be more secure in case of production mode
    if (!(googleToken.length == 0)) {
      let loginData = {
        username: username,
        password: password
      };

      JWTLogin(loginData).then(data => {
        if (data.status === 200) {
          setLogedIn(true);
          setEmail(data.email);
          setNiceName(data.niceName);

          window.location.href = "/";
        } else {
          setError({
            msg: data.message,
            status: "danger"
          });
        }
        enableLoginBtn();
      });
    } else {
      setError({ msg: "Recaptcha error", status: "danger" });
      enableLoginBtn();
    }
  };

  return (
    <>
      <form className="col-md-6  order-1 order-md-2">
        <Message />
        <h3 className="my-4">ورود به سیستم</h3>
        <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
          <input
            className="form-control"
            id="username"
            name="username"
            placeholder="شماره موبایل"
            type="text"
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
          <input
            className="form-control"
            id="username"
            name="username"
            placeholder="رمز ورود"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary btn-lg my-3"
          type="button"
          id="loginbtn"
          onClick={e => loginRequest(e)}
        >
          ورود
        </button>
      </form>
    </>
  );
}
export default Login;
