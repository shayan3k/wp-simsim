import React, { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Axios from "axios";

const validateEmail = email => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

function SignUp() {
  //  More Persistant States
  const googleToken = useStoreState(state => state.google.token);
  const setError = useStoreActions(actions => actions.message.setError);

  //Local States
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [CheckBox, setCheckBox] = useState("");
  const [VerifyPassword, setVerifyPassword] = useState("");
  const baseUrl = useStoreState(state => state.urls.baseUrl);

  //Function for resting fields after successfull signup
  const handleResetfields = () => {
    setPhoneNumber("");
    setName("");
    setEmail("");
    setPassword("");
    setCheckBox("");
    setVerifyPassword("");
  };

  const disableSignUpBtn = () =>
    (document.getElementById("submitBtn").style.cssText =
      "opacity: .3;pointer - events : none;");
  const enableSignUpBtn = () =>
    (document.getElementById("submitBtn").style.cssText =
      "opacity: 1;pointer - events : none;");

  const handleSubmitButton = e => {
    e.preventDefault();
    disableSignUpBtn();

    if (!(googleToken.length == 0)) {
      let flag = false;
      let msg = "";

      console.log(PhoneNumber.slice(0, 2));
      if (PhoneNumber.length !== 11 || PhoneNumber.slice(0, 2) !== "09") {
        msg += "<li>شماره تماس وارد شده اشتباه است</li>";
        flag = true;
      }
      if (!validateEmail(Email)) {
        msg += "<li>ایمیل وارد شده اشتباه است</li>";
        flag = true;
      }

      if (!Name) {
        msg += "<li>نام وارد شده اشتباه است</li>";
        flag = true;
      }

      if (Password !== VerifyPassword) {
        msg += "<li>رمزهای وارد مغایر است</li>";
        flag = true;
      }

      if (Password.length < 8) {
        msg += "<li>رمز عبور وارد شده کمتر از 8 کرکتر است</li>";
        flag = true;
      }

      if (!CheckBox) {
        msg += "<li>تیک قوانین نزده نشده</li>";
        flag = true;
      }
      let data = {
        username: PhoneNumber,
        name: Name,
        email: Email,
        password: Password
      };
      console.log(data);
      if (!flag) {
        Axios.post(baseUrl + "/wp/v2/users/register", data)
          .then(e => {
            console.log(e);
            setError({
              msg:
                "ثبت نام شما با موفقیت انجام شد. لطفا با نام کاربری و رمز عبور خود, وارد شوید",
              status: "success"
            });
            handleResetfields();
            enableSignUpBtn();
          })

          .catch(e => {
            setError({
              msg: e.response.data.message,
              status: "danger"
            });
            enableSignUpBtn();
          });
      } else {
        setError({
          msg,
          status: "danger"
        });
        enableSignUpBtn();
      }
    } else {
      setError({ msg: "Recaptcha error", status: "danger" });
      enableSignUpBtn();
    }
  };

  const handlePhoneNumberOnChange = e => {
    var data = e.target.value.replace(/[^0-9]+/g, "");
    setPhoneNumber(data);
  };

  const handleNameOnChange = e => {
    var data = e.target.value.replace(/[^\u0600-\u06FF\s]/g, "");
    setName(data);
  };

  const handleEmailOnChange = e => {
    setEmail(e.target.value);
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
            maxLength="11"
            value={PhoneNumber}
            onChange={handlePhoneNumberOnChange}
          />
        </div>
        <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
          <input
            className="form-control"
            id="name"
            name="name"
            placeholder="نام"
            type="text"
            maxLength="20"
            value={Name}
            onChange={handleNameOnChange}
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
            onChange={handleEmailOnChange}
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

        <div className="form-check row m-0 p-0 ">
          <label className="col-11 form-check-label font2" for="checkBox">
            قوانین مطالعه کردم
          </label>
          <input
            type="checkbox"
            className="col-1 form-check-input"
            id="checkBox"
            value={CheckBox}
            onChange={e => setCheckBox(e.target.checked)}
          />
        </div>

        <button
          className="btn btn-primary btn-lg my-3 "
          id="submitBtn"
          type="submit"
        >
          ثبت نام
        </button>
      </form>
    </>
  );
}

export default SignUp;
