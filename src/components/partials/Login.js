import React, { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { JWTLogin } from "../services/Auth";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const googleToken = useStoreState(state => state.google.token);
  const logedIn = useStoreState(state => state.auth.logedIn);
  const setLogedIn = useStoreActions(actions => actions.auth.setLogedIn);
  const setEmail = useStoreActions(actions => actions.auth.setEmail);
  const setNiceName = useStoreActions(actions => actions.auth.setNiceName);
  const setError = useStoreActions(actions => actions.message.setError);

  const disableLoginBtn = () =>
    (document.getElementById("loginbtn").style.cssText =
      "opacity: .3;pointer - events : none;");
  const enableLoginBtn = () =>
    (document.getElementById("loginbtn").style.cssText =
      "opacity: 1;pointer - events : none;");

  const loginRequest = async e => {
    e.preventDefault();
    disableLoginBtn();
    // Must be moved to process.env file in production mode
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
        } else {
          setError({
            msg: data.message,
            status: "danger"
          });
        }
        // enableLoginBtn();
      });
    } else {
      setError({ msg: "Recaptcha تایید نشده.", status: "danger" });
      enableLoginBtn();
    }
  };

  const handleUserNameOnChange = e => {
    var data = e.target.value.replace(/[^0-9]+/g, "");
    setUsername(data);
  };

  const handlePasswordOnChange = e => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form className="col-md-6  order-1 order-md-2">
        <h3 className="my-4">ورود به سیستم</h3>
        <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
          <input
            className="form-control"
            id="username"
            name="username"
            placeholder="شماره موبایل"
            type="text"
            maxlength="11"
            value={username}
            onChange={handleUserNameOnChange}
          />
        </div>
        <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
          <input
            className="form-control"
            id="username"
            name="username"
            placeholder="رمز ورود"
            type="password"
            value={password}
            onChange={handlePasswordOnChange}
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
