import React, { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import customSelect from "custom-select";
import "custom-select/build/custom-select.css";

function SearchBox() {
  const [Selects, setSelects] = useState("");
  const setStatus = useStoreActions(actions => actions.searchBox.setStatus);
  const setValue = useStoreActions(actions => actions.searchBox.setValue);
  const setRond = useStoreActions(actions => actions.searchBox.setRond);
  const setCode = useStoreActions(actions => actions.searchBox.setCode);
  const setLocation = useStoreActions(actions => actions.searchBox.setLocation);
  const setPriceRange = useStoreActions(
    actions => actions.searchBox.setPriceRange
  );

  useEffect(() => {
    SelectConfig();
  }, []);

  const SelectConfig = () => {
    const Selects = customSelect("select");
    setSelects(Selects);

    Selects[0].select.addEventListener("change", e => {
      setCode(e.target.value);
    });

    Selects[1].select.addEventListener("change", e => {
      setLocation(e.target.value);
    });

    Selects[2].select.addEventListener("change", e => {
      setPriceRange(e.target.value);
    });

    Selects[3].select.addEventListener("change", e => {
      setStatus(e.target.value);
    });

    Selects[4].select.addEventListener("change", e => {
      setValue(e.target.value);
    });

    Selects[5].select.addEventListener("change", e => {
      setRond(e.target.value);
    });
  };

  const handleResetButton = () => {
    Selects[1].value = "";
    Selects[2].value = "";
    Selects[3].value = "";
    Selects[4].value = "";
    Selects[5].value = "";
    setStatus("");
    setValue("");
    set("");
    setCode("");
    setRond("");
    setCode("");
    setStatus("");
  };

  return (
    <div className="container mx-auto searchBox" id="searchBox1">
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
        </div>

        <div
          className="col-12 col-md-8 order-1 order-md-2 bg-white p-1 px-3 py-4 "
          id="searchBoxAccordition"
        >
          <div className="m-0 p-0 w-100 d-flex justify-content-between align-items-center">
            <span>ایتم خود را گیدا کنبید</span>

            <div className="default-btn btn-search-option px-1 col-3">
              <h6 className="font2"> جستجو</h6>
              <i class="fas fa-search"></i>
            </div>
          </div>
          <hr />

          <div className="row p-0 m-0 w-100">
            <div className=" row bg-white w-100 mx-auto">
              <div className="col-6 py-3">
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100">
                    <option defaultValue value="">
                      کد سیمکارت
                    </option>
                    <option value="0">0 کد</option>
                    <option value="1">1 کد</option>
                    <option value="2">2 کد</option>
                    <option value="3">3 کد</option>
                    <option value="4">4 کد</option>
                    <option value="5">5 کد</option>
                    <option value="6">6 کد</option>
                    <option value="7">7 کد</option>
                    <option value="8">8 کد</option>
                    <option value="9">9 کد</option>
                  </select>
                </div>
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
                  <select className="select-custom w-100">
                    <option defaultValue value="">
                      بازه قیمتی
                    </option>
                    <option value="0">تا یک میلیون تومان</option>
                    <option value="1">تا ده میلیون تومان</option>
                    <option value="2">تا نود میلیون تومان</option>
                    <option value="3">از نود میلیون تومان به بالا</option>
                  </select>
                </div>
              </div>
              <div className="col-6 py-3">
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100">
                    <option defaultValue value="">
                      وضعیت
                    </option>
                    <option value="صفر">صفر</option>
                    <option value="تقریبا صفر">تقریبا صفر</option>
                    <option value="کارکرده">کارکرده</option>
                  </select>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>

                  <select className="select-custom w-100">
                    <option defaultValue value="">
                      ارزشمندی
                    </option>
                    <option value="طلایی">طلایی</option>
                    <option value="نقره ای">نقره ای</option>
                    <option value="برنز">برنز</option>
                  </select>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100 bg-dark">
                    <option defaultValue value="">
                      نوع رند
                    </option>
                    <option value="رند">رند</option>
                    <option value="نیمه رند">نیمه رند</option>
                    <option value="معمولی">معمولی</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
