import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="page-footer font-small stylish-color-dark pt-4">
          <div className="container text-center text-md-left">
            <div className="row m-0 p-0 ">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">بورس سیمکارت</h5>
                <p>خرید و فروش انواع سیمکارت های اعتباری و دایم</p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-3" />

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">لینکها</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">سیمکارت</a>
                  </li>
                  <li>
                    <a href="#!">همراه اول</a>
                  </li>
                  <li>
                    <a href="#!">ایرانسل</a>
                  </li>
                  <li>
                    <a href="#!">رایتل</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">لینکها</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">سیمکارت</a>
                  </li>
                  <li>
                    <a href="#!">همراه اول</a>
                  </li>
                  <li>
                    <a href="#!">ایرانسل</a>
                  </li>
                  <li>
                    <a href="#!">رایتل</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />

          <div className="row p-0 m-0 container d-flex justify-content-between align-items-center mx-auto">
            <div className="col-md-4 mb-4">
              <h6>سیمکارت خود را قیمتگزاری منید</h6>
              <button className="btn btn-outline-dark btn-lg ">شروع</button>
            </div>

            <div className="col-md-4 mb-4">
              <h6>به خبرنامه ما بپیوندید</h6>
              <form className="input-group">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="ایمیل خود را وارد کنید"
                  aria-label="Your email"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-sm btn-outline-dark my-0"
                    type="button"
                  >
                    ثبت
                  </button>
                </div>
              </form>
            </div>
          </div>

          <hr />

          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1">
                <i className="social-media-icons fab fa-facebook-f fa-2x"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1">
                <i className="social-media-icons fab fa-twitter fa-2x"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-gplus mx-1">
                <i className="social-media-icons fab fa-google-plus-g fa-2x"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1">
                <i className="social-media-icons fab fa-linkedin-in fa-2x"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-dribbble mx-1">
                <i className="social-media-icons fab fa-dribbble fa-2x"></i>
              </a>
            </li>
          </ul>

          <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="https://shayanmotalebi.ir">ShayaNNN</a>
          </div>
        </footer>
      </>
    );
  }
}
