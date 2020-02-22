import React, { useEffect, useState } from "react";
import { TimelineMax } from "gsap";
export default function Footer() {
  useEffect(() => {
    let tl = new TimelineMax({ repeat: -1 });
    tl.fromTo(
      ".fa-arrow-up",
      2,
      {
        css: { transform: "translate(10px , 10px) rotate(-45deg)" },
        opacity: 1
      },
      {
        css: {
          transform: "translate(-10px , -10px)  rotate(-45deg)",
          opacity: 0
        }
      }
    );
  }, []);
  return (
    <>
      <footer className="page-footer font-small stylish-color-dark pt-4">
        <a className="go-to-top" href="#myNavbar">
          <i class="fas fa-arrow-up fa-rotate-45"></i>
        </a>
        <div className="container text-center text-md-left">
          <div className="row m-0 p-0 ">
            <div className="col-12 col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">بورس سیمکارت</h5>
              <p>مهم اینه که میتونی بدون واسطه سیمکارت بفروشی</p>
            </div>

            <hr className="col-12 clearfix w-100 d-md-none pb-3" />

            <div className="col-6 col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">لینکها</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">داشبورد</a>
                </li>
                <li>
                  <a href="#!">قوانین</a>
                </li>
                <li>
                  <a href="#!">تبلیغات</a>
                </li>
                <li>
                  <a href="#!">درباره ما</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">لینکها</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">خانه</a>
                </li>
                <li>
                  <a href="#!">ثبت نام</a>
                </li>

                <li>
                  <a href="#!">تماس با ما</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="row m-0 p-0 w-100  d-flex justify-content-center align-content-center">
          <div className="col-12 col-md-6 row p-0 m-0 container d-flex justify-content-center flex-column align-items-end mx-auto">
            <h6 className="text-white">سیمکارت خود را آگهی کنید</h6>
            <button className="btn btn-outline-light">شروع</button>
            <hr />
          </div>

          <div className="col-12 col-md-6 row p-0 m-0 w-100 d-flex justify-content-end align-items-center ">
            <ul className="list-unstyled list-inline text-center w-100">
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
          </div>
        </div>
        <div className="container-fluid d-inline-block w-100 bg-dark text-center">
          © 2020 Copyright:
          <a href="https://shayanmotalebi.ir">ShayaNNN</a>
        </div>
      </footer>
    </>
  );
}
