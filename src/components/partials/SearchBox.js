import React, { useEffect } from "react";
import img1 from "../images/sim.svg";
import customSelect from "custom-select";
import "custom-select/build/custom-select.css";

function SearchBox() {
  useEffect(() => {
    customSelect("select");
  }, []);

  return (
    <div className="container mx-auto searchBox" id="searchBox">
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

        <div
          className="col-12 col-md-8 order-1 order-md-2 bg-white p-1 px-3 py-4 "
          id="searchBoxAccordition"
        >
          <div className="m-0 p-0 w-100 d-flex justify-content-between align-items-center">
            <span>ایتم خود را گیدا کنبید</span>

            <div className="default-btn btn-search-option px-1 col-3">
              <h6 className="font2"> جستجو</h6>
              <i className="fa fa-spinner"></i>
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
                    <option defaultValue>فروشنده</option>
                    <option>همراه اول</option>
                    <option>ایرانسل</option>
                    <option>رایتل</option>
                  </select>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100">
                    <option defaultValue>استان</option>
                    <option>همراه اول</option>
                    <option>ایرانسل</option>
                    <option>رایتل</option>
                  </select>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100">
                    <option defaultValue>شهر</option>
                    <option>همراه اول</option>
                    <option>ایرانسل</option>
                    <option>رایتل</option>
                  </select>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100">
                    <option defaultValue>قیمت</option>
                    <option>همراه اول</option>
                    <option>ایرانسل</option>
                    <option>رایتل</option>
                  </select>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100">
                    <option defaultValue>بازه قیمتی </option>
                    <option>همراه اول</option>
                    <option>ایرانسل</option>
                    <option>رایتل</option>
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
                    <option defaultValue>اپراتور</option>
                    <option>همراه اول</option>
                    <option>ایرانسل</option>
                    <option>رایتل</option>
                  </select>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100">
                    <option defaultValue>نوع</option>
                    <option>همراه اول</option>
                    <option>ایرانسل</option>
                    <option>رایتل</option>
                  </select>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100">
                    <option defaultValue>وضعیت</option>
                    <option>همراه اول</option>
                    <option>ایرانسل</option>
                    <option>رایتل</option>
                  </select>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100">
                    <option defaultValue>مرغوبیت</option>
                    <option>همراه اول</option>
                    <option>ایرانسل</option>
                    <option>رایتل</option>
                  </select>
                </div>
                <div className="input-group-custom font3 mb-1">
                  <div className="input-group-prepend custom-select-prepand d-flex justify-content-center align-items-center p-1 pl-3">
                    <span>
                      <i className="fas fa-caret-down fa-1x"></i>
                    </span>
                  </div>
                  <select className="select-custom w-100">
                    <option defaultValue>نوع رند</option>
                    <option>همراه اول</option>
                    <option>ایرانسل</option>
                    <option>رایتل</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex justify-content-between justify-content-md-center align-items-center">
                  <button className="default-btn btn-search px-5 mx-4">
                    <h6>جستجو</h6>
                    <i className="fa fa-spinner"></i>
                  </button>
                  <button className="default-btn btn-search px-5 mx-4 ">
                    <h6>ریست</h6>
                    <i className="fa fa-spinner"></i>
                  </button>
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
