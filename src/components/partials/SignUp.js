import React, { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Message from "./Message";

function SignUp() {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [VerifyPassword, setVerifyPassword] = useState("");

  const handleSubmitButton = e => {
    e.preventDefault();
    console.log(PhoneNumber, Name, Email, Password, VerifyPassword);
  };
  return (
    <>
      <Message />
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
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
          <input
            className="form-control"
            id="password"
            name="password"
            placeholder="رمز ورود"
            type="password"
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
