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
  const [Operator, setOperator] = useState("");
  const [Code, setCode] = useState("");
  const [Value, setValue] = useState("");
  const [Rond, setRond] = useState("");
  const [Location, setLocation] = useState("");
  const [SimStatus, setSimStatus] = useState("");
  const [Price, setPrice] = useState("");
  const [Sale, setSale] = useState("");
  const [SecondPrice, setSecondPrice] = useState("");
  const [Text, setText] = useState("");
  const baseUrl = "http://localhost/wordpress/wp-json";

  const SelectConfig = () => {
    const Selects = customSelect("select");
    setSelects(Selects);
    Selects[0].select.addEventListener("change", e => {
      handleLocationOnChange(e);
    });

    Selects[1].select.addEventListener("change", e => {
      handleRondOnChange(e);
    });

    Selects[2].select.addEventListener("change", e => {
      handleStatusOnChange(e);
    });
  };

  const handlePhoneNumberOnChange = e => {
    // var data = e.target.value
    //   .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
    //   .trim();

    var data = e.target.value.replace(/[^0-9]+/g, "");
    setPhoneNumber(data);
    if (data.length === 11 && data.slice(0, 4) === "0912") {
      setCode(data.slice(4, 5));
    } else setCode("");
  };
  const handleLocationOnChange = e => {
    setLocation(e.target.value);
    console.log(e.target.value);
  };
  const handleRondOnChange = e => {
    setRond(e.target.value);
    console.log(e.target.value);
  };
  const handleStatusOnChange = e => {
    setSimStatus(e.target.value);
    console.log(e.target.value);
  };
  const handlePriceOnChange = e => {
    var data = e.target.value.replace(/[^0-9]+/g, "");
    setPrice(data);

    //get value
    if (parseInt(data) > 90000) {
      setValue("طلایی");
    } else if (parseInt(data) > 10000) {
      setValue("نقره ای");
    } else {
      setValue("برنز");
    }

    console.log(data);
  };
  const handleSecondPriceOnChange = e => {
    var data = e.target.value.replace(/[^0-9]+/g, "");
    setSecondPrice(data);

    console.log(e.target.value);
  };
  const handleTextOnChange = e => {
    var data = e.target.value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>]/, "");

    setText(data);
    console.log(data);
  };

  const handleFormSubmition = e => {
    e.preventDefault();
    let flag = false;
    let msg = "";

    console.log(PhoneNumber, Location, Operator, SimStatus, Price, Text);

    console.log(PhoneNumber.slice(0, 2));
    if (PhoneNumber.length !== 11 || PhoneNumber.slice(0, 4) !== "0912") {
      msg += "<li>شماره اشتباه</li>";
      flag = true;
    }
    if (!Rond.length) {
      msg += "<li>نوع روند را انتخاب کنید</li>";
      flag = true;
    }

    if (!Location.length) {
      msg += "<li>استان را انتخاب کنید</li>";
      flag = true;
    }

    if (!SimStatus.length) {
      msg += "<li>وضعیت سیم را انتخاب کنید</li>";
      flag = true;
    }

    if (isNaN(parseInt(Price)) || parseInt(Price) < 1000) {
      msg += "<li>قیمت اشتباه</li>";
      flag = true;
    }

    if (Sale && !SecondPrice.length) {
      msg += "<li>قیمت دوم خالی است</li>";
      flag = true;
    }

    if (Sale && SecondPrice >= Price) {
      msg += "<li>قیمت دوم کمتر باید باشه</li>";
      flag = true;
    }

    if (!flag) {
      Axios.post(
        baseUrl + "/wp/v2/myadvertisement",
        {
          fields: {
            phonenumber: PhoneNumber,
            operator: "همراه اول",
            code: Code,
            value: Value,
            rond: Rond,
            location: Location,
            simstatus: SimStatus,
            text: Text.trim(),
            price: Price * 1000,
            sale: Sale ? "فوری" : "",
            secondprice: Sale ? SecondPrice * 1000 : 0,
            modifed: new Date().toISOString()
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

        .catch(e => {
          console.log(e.response.data.message);
          setError({
            msg: e.response.data.message,
            status: "danger"
          });
        });
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
    setOperator("");
    setLocation("");
    setCode("");
    setValue("");
    setRond("");
    setSimStatus("");
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
                    type="string"
                    className="form-control"
                    placeholder="شماره تلفن خط فروشی"
                    value={PhoneNumber}
                    maxlength="11"
                    onChange={handlePhoneNumberOnChange}
                  />
                </div>
                {Code ? (
                  <div className="lead font3 c-light-red">کد {Code}</div>
                ) : (
                  ""
                )}

                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>

                  <select className="select-custom w-100" id="Location">
                    <option value="" defaultValue>
                      استان
                    </option>
                    <option value="آذربایجان شرقی">آذربایجان شرقی</option>
                    <option value="آذربایجان غربی">آذربایجان غربی</option>
                    <option value="اردبیل">اردبیل</option>
                    <option value="اصفهان">اصفهان</option>
                    <option value="البرز">البرز</option>
                    <option value="ایلام">ایلام</option>
                    <option value="بوشهر">بوشهر</option>
                    <option value="تهران">تهران</option>
                    <option value="چهارمحال و بختیاری">
                      چهارمحال و بختیاری
                    </option>
                    <option value="خراسان جنوبی">خراسان جنوبی</option>
                    <option value="خراسان رضوی">خراسان رضوی</option>
                    <option value="خراسان شمالی">خراسان شمالی</option>
                    <option value="خوزستان">خوزستان</option>
                    <option value="زنجان">زنجان</option>
                    <option value="سمنان">سمنان</option>
                    <option value="سیستان و بلوچستان">سیستان و بلوچستان</option>
                    <option value="فارس">فارس</option>
                    <option value="قزوین">قزوین</option>
                    <option value="قم">قم</option>
                    <option value="کردستان">کردستان</option>
                    <option value="کرمانشاه">کرمانشاه</option>
                    <option value="کهگیلویه و بویراحمد">
                      کهگیلویه و بویراحمد
                    </option>
                    <option value="گلستان">گلستان</option>
                    <option value="گیلان">گیلان</option>
                    <option value="لرستان">لرستان</option>
                    <option value="مازندران">مازندران</option>
                    <option value="مرکزی">مرکزی</option>
                    <option value="هرمزگان">هرمزگان</option>
                    <option value="همدان">همدان</option>
                    <option value="یزد">یزد</option>
                  </select>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100" id="Operator">
                    <option defaultValue value="">
                      نوع رند
                    </option>
                    <option value="رند">رند</option>
                    <option value="نیمه رند">نیمه رند</option>
                    <option value="معمولی">معمولی</option>
                  </select>
                </div>
                {Rond ? (
                  <div className="lead font4 c-light-red">
                    نوع رند توسط کارشناس قبل از تایید پست چک میشه
                  </div>
                ) : (
                  ""
                )}
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
                    <option defaultValue value="">
                      وضعیت
                    </option>
                    <option>صفر</option>
                    <option>تقریبا صفر</option>
                    <option>کارکرده</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-7 order-md-1 py-3">
                <textarea
                  class="form-control w-100 mh-100px"
                  id="exampleFormControlTextarea1"
                  placeholder="متن تبلیغ"
                  value={Text}
                  maxlength="150"
                  onChange={handleTextOnChange}
                ></textarea>
                <div class="col-12 form-check row m-0 p-0 py-2 px-3">
                  <label class="col-10 form-check-label font2" for="checkBox">
                    فروش فوری؟
                  </label>
                  <input
                    type="checkbox"
                    class="col-2 form-check-input"
                    data-toggle="collapse"
                    data-target="#collapsediv1"
                    onChange={e => {
                      setSale(e.target.checked);
                      console.log(e.target.checked);
                    }}
                  />
                </div>

                <div
                  className=" col-12"
                  id="collapsediv1"
                  class="collapse div1"
                >
                  <div className="input-group m-0 p-0 d-flex justify-content-center align-content-end">
                    <p className="mt-auto m-0 mr-5 mr-md-3 d-inline-block">
                      تومان
                    </p>

                    <input
                      type="text w-50"
                      className="form-control flex-auto d-inline-block"
                      placeholder="قیمت به تومان"
                      value={SecondPrice}
                      onChange={handleSecondPriceOnChange}
                    />
                    <p className="mt-auto m-0 d-inline-block">.000</p>
                  </div>
                </div>
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
