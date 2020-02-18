import React, { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Axios from "axios";

const validateEmail = email => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

function SignUp() {
  //  More Persistant States
  const setError = useStoreActions(actions => actions.message.setError);

  //Local States
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [VerifyPassword, setVerifyPassword] = useState("");
  const baseUrl = "http://localhost/wordpress/wp-json";

  //Function for resting fields after successfull signup
  const handleResetfields = () => {
    setPhoneNumber("");
    setName("");
    setEmail("");
    setPassword("");
    setVerifyPassword("");
  };

  const handleSubmitButton = e => {
    e.preventDefault();
    console.log(PhoneNumber, Name, Email, Password, VerifyPassword);

    let flag = false;
    let msg = "";

    console.log(PhoneNumber.slice(0, 2));
    if (PhoneNumber.length !== 11 || PhoneNumber.slice(0, 2) !== "09") {
      msg += "<li>شماره اشتباه</li>";
      flag = true;
    }
    if (!validateEmail(Email)) {
      msg += "<li>ایمیل اشتب است</li>";
      flag = true;
    }

    if (!Name) {
      msg += "<li>نام اشنباس</li>";
      flag = true;
    }

    if (Password !== VerifyPassword) {
      msg += "<li>رمز مغایر است</li>";
      flag = true;
    }

    if (Password.length < 8) {
      msg += "<li>پسورد حداقل 8 کرکتر الاغ</li>";
      flag = true;
    }

    if (!flag) {
      Axios.post(baseUrl + "/wp/v2/users/register", {
        username: PhoneNumber,
        name: Name,
        email: Email,
        password: Password
      })
        .then(e => {
          console.log(e);
          setError({
            msg: "موفق. حالا وارد شو",
            status: "success"
          });
          handleResetfields();
        })

        .catch(e => console.log(e.response));
    } else {
      setError({
        msg,
        status: "danger"
      });
    }
  };

  return (
    <>
      <form
        className="col-md-6 order-2 order-md-1"
        onSubmit={handleSubmitButton}
      >
        <h3 className="my-4">ثبت اکانت جدید</h3>
        <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
          <input
            className="form-control"
            id="username"
            name="username"
            placeholder="شماره موبایل خود را وارد کنید"
            type="text"
            value={PhoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
          <input
            className="form-control"
            id="name"
            name="name"
            placeholder="نام"
            type="text"
            value={Name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
          <input
            className="form-control"
            id="email"
            name="email"
            placeholder="ایمیل"
            type="text"
            value={Email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
          <input
            className="form-control"
            id="password"
            name="password"
            placeholder="رمز ورود"
            type="password"
            value={Password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
          <input
            className="form-control"
            id="password2"
            name="password2"
            placeholder="تکرار رمز ورود"
            type="password"
            value={VerifyPassword}
            onChange={e => setVerifyPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary btn-lg my-3" type="submit">
          ثبت نام
        </button>
      </form>
    </>
  );
}

export default SignUp;
