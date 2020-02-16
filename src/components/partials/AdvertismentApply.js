import React, { Component } from "react";
import { TweenMax, TimelineMax } from "gsap";
import { Link } from "react-router-dom";
import Shop from "../Shop";
import img from "../images/hamrah.jpg";

export default class AdvertismentApply extends Component {
  render() {
    return (
      <Link
        className="card text-decoration-none c-black w-100 h-100 advertisment py-0 shadow position-relative bg-transparent"
        to="/shop"
      >
        <div className="card-body w-100 h-100 py-3 d-flex justify-content-center align-items-center flex-column">
          <div
            className="ad-img-mask"
            style={{
              backgroundImage: "url(" + img + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          <h3 className="ad-number font1 text-center pt-0">
            تبلیغ خود را بسازید
          </h3>
          <i className="fas fa-plus fa-4x"></i>
        </div>
      </Link>
    );
  }
}
