import React, { useEffect, useState, setState } from "react";
import customSelect from "custom-select";
import Message from "./Message";
import { useStoreActions } from "easy-peasy";
import "custom-select/build/custom-select.css";
import { JWTHeader } from "../services/Auth";
import Axios from "axios";

export default function NewAdvertisment() {
  useEffect(() => {
    SelectConfig();

    //Remove Listerners on UnMOUNT
  }, []);

  //  More Persistant States

  const setError = useStoreActions(actions => actions.message.setError);

  //Local States
  const [Selects, setSelects] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Location, setLocation] = useState("");
  const [Operator, setOperator] = useState("");
  const [Status, setStatus] = useState("");
  const [Price, setPrice] = useState("");
  const [Text, setText] = useState("");
  const baseUrl = "http://localhost/wordpress/wp-json";

  const SelectConfig = () => {
    const Selects = customSelect("select");
    setSelects(Selects);
    Selects[0].select.addEventListener("change", e => {
      handleLocationOnChange(e);
    });

    Selects[1].select.addEventListener("change", e => {
      handleOperatorOnChange(e);
    });

    Selects[2].select.addEventListener("change", e => {
      handleStatusOnChange(e);
    });
  };

  const handlePhoneNumberOnChange = e => {
    setPhoneNumber(e.target.value);
    console.log(e.target.value);
  };

  const handleLocationOnChange = e => {
    setLocation(e.target.value);
    console.log(e.target.value);
  };

  const handleOperatorOnChange = e => {
    setOperator(e.target.value);
    console.log(e.target.value);
  };

  const handleStatusOnChange = e => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  const handlePriceOnChange = e => {
    setPrice(e.target.value);
    console.log(e.target.value);
  };

  const handleTextOnChange = e => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const handleFormSubmition = e => {
    e.preventDefault();
    let flag = false;
    let msg = "";

    console.log(PhoneNumber, Location, Operator, Status, Price, Text);

    console.log(PhoneNumber.slice(0, 2));
    if (PhoneNumber.length !== 11 || PhoneNumber.slice(0, 2) !== "09") {
      msg += "<li>شماره اشتباه</li>";
      flag = true;
    }
    if (isNaN(parseInt(Price)) || parseInt(Price) < 1000) {
      msg += "<li>قیمت اشتباه</li>";
      flag = true;
    }

    if (!flag) {
      Axios.post(
        baseUrl + "/wp/v2/myadvertisement",
        {
          fields: {
            phonenumber: PhoneNumber,
            location: Location,
            status: Status,
            text: Text,
            price: Price * 1000,
            sellerphonenumber: "",
            sellername: ""
          }
        },
        JWTHeader()
      )
        .then(e => {
          console.log(e);

          setError({
            msg: "موفق",
            status: "success"
          });
        })

        .catch(e => console.log(e.response));
    } else {
      setError({
        msg,
        status: "danger"
      });
    }
  };

  const handleResetButton = () => {
    Selects[0].value = "";
    Selects[1].value = "";
    Selects[2].value = "";
    setPhoneNumber("");
    setStatus("");
    setPrice("");
    setText("");

    console.log("Hello");
  };

  return (
    <div className="container mx-auto" id="">
      <div className="row bg-transparent">
        <div className="bg-transparent row col-12 col-md-4 order-2 order-md-1 p-0 m-0 pr-1">
          <img
            className="col-6 col-md-12 ad1-image w-100 px-0 border"
            src="https://via.placeholder.com/100x30.png"
          />

          <img
            className="col-6 col-md-12 ad1-image w-100 px-0 border"
            src="https://via.placeholder.com/100x30.png"
          />

          <img
            className="col-6 col-md-12 ad1-image w-100 px-0 border"
            src="https://via.placeholder.com/100x30.png"
          />
          <img
            className="col-6 col-md-12 ad1-image w-100 px-0 border"
            src="https://via.placeholder.com/100x30.png"
          />
        </div>

        <div className="col-12 col-md-8 order-1 order-md-2 bg-white p-1 px-3 py-4 ">
          <div className="m-0 p-0 w-100 d-flex justify-content-between align-items-center">
            <span>ایتم خود را گیدا کنبید</span>

            <div className="default-btn btn-search-option px-1 col-3">
              <h6 className="font2"> ثبت آگهی جدید</h6>
              <i className="fa fa-spinner"></i>
            </div>
          </div>
          <hr />

          <Message />

          <div className="row p-0 m-0 w-100">
            <form
              action=""
              onSubmit={handleFormSubmition}
              className=" row bg-white w-100 mx-auto d-flex justify-content-end align-content-center"
            >
              <div className="col-12 col-md-5 order-md-2 py-3">
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="شماره تلفن خط فروشی"
                    value={PhoneNumber}
                    onChange={handlePhoneNumberOnChange}
                  />
                </div>

                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>

                  <select
                    className="select-custom w-100"
                    id="Location"
                    defaultValue={Location}
                  >
                    <option value="" defaultValue>
                      استان
                    </option>
                    <option value="تهران">تهران</option>
                    <option value="کرج">کرج</option>
                    <option value="شهرمرد">شهرمرد</option>
                    <option value="تبریز">تبریز</option>
                  </select>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100" id="Operator">
                    <option defaultValue>اپراتور</option>
                    <option value="همراه اول">همراه اول</option>
                    <option value="ایرانسل">ایرانسل</option>
                    <option value="رایتل">رایتل</option>
                  </select>
                </div>
                <div className="input-group mt-3 d-flex justify-content-center align-content-end">
                  <p className="mt-auto m-0 mr-5 mr-md-3">تومان</p>

                  <input
                    type="text"
                    className="form-control flex-auto"
                    placeholder="قیمت به تومان"
                    value={Price}
                    onChange={handlePriceOnChange}
                  />
                  <p className="mt-auto m-0">.000</p>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100" id="status">
                    <option defaultValue>وضعیت</option>
                    <option>صفر</option>
                    <option>تقریبا صفر</option>
                    <option>کارکرده</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-7 order-md-1 py-3">
                <textarea
                  class="form-control w-100 h-100 mh-100px"
                  id="exampleFormControlTextarea1"
                  placeholder="متن تبلیغ"
                  value={Text}
                  onChange={handleTextOnChange}
                ></textarea>
              </div>

              <div className="col-12 order-md-3">
                <div className="d-flex justify-content-end align-items-center">
                  <a
                    className="default-btn btn-search px-5 mx-4"
                    onClick={handleResetButton}
                  >
                    <h6>ریست</h6>
                    <i className="fa fa-spinner"></i>
                  </a>

                  <button
                    className="default-btn btn-search px-5 mx-4"
                    type="submit"
                  >
                    <h6>ثبت</h6>
                    <i className="fa fa-spinner"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
