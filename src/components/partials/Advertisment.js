import React, { Component } from "react";
import { TweenMax, TimelineMax, CSSPlugin, Power4 } from "gsap";
import persianJs from "persianjs";
import GoldCrown from "../images/gold.png";
import SilverCrown from "../images/silver.png";
import BronzCrown from "../images/bronz.png";

export default class Advertisment extends Component {
  constructor(props) {
    super(props);
    this.handleAdvertismentClick = this.handleAdvertismentClick.bind(this);
    this.flagRender = this.flagRender.bind(this);
    this.state = {
      toggle: false,
      phoneNumber: props.phoneNumber,
      status: props.status,
      location: props.location,
      price: props.price,
      text: props.text,
      sellerPhoneNumber: props.sellerPhoneNumber,
      sellerName: props.sellerName,
      sale: props.sale,
      flag: "bronz",
      rond: "rond"
    };
  }

  handleAdvertismentClick = e => {
    let tl = new TimelineMax(),
      tl2 = new TimelineMax();
    tl.to(e.currentTarget, 0.3, { ease: Power4.easeOut, rotateY: "180deg" });
    tl2.to(e.currentTarget, 0.3, { ease: Power4.easeOut, rotateY: "0" });
    tl.pause();
    tl2.pause();
    this.state.toggle ? tl2.play() : tl.play();

    this.setState({ toggle: !this.state.toggle });
  };

  flagRender = () => {
    if (this.state.flag === "urgent")
      return <div className="card-flag font3-4">فوری</div>;
    else if (this.state.flag === "diamond")
      return (
        <div className="card-crown font3-4">
          <i class="fa fa-diamond" aria-hidden="true"></i>
        </div>
      );
    else if (this.state.flag === "gold")
      return (
        <div className="card-crown font3-4">
          <img className="w-100 h-100" src={GoldCrown} alt="GoldCrown" />
        </div>
      );
    else if (this.state.flag === "silver")
      return (
        <div className="card-crown font3-4">
          <img className="w-100 h-100" src={SilverCrown} alt="SilverCrown" />
        </div>
      );
    else if (this.state.flag === "bronz")
      return (
        <div className="card-crown font3-4">
          <img className="w-100 h-100" src={BronzCrown} alt="crown" />
        </div>
      );
    else {
      return <div className="card-flag font3-4">Not found</div>;
    }
  };

  rondRender = () => {
    if (this.state.flag === "urgent")
      return <div className="card-flag font3-4">فوری</div>;
    else if (this.state.flag === "gold")
      return (
        <div className="card-crown font3-4">
          <img className="w-100 h-100" src={GoldCrown} alt="GoldCrown" />
        </div>
      );
    else if (this.state.flag === "silver")
      return (
        <div className="card-flag font3-4">
          <img className="w-100 h-100" src={SilverCrown} alt="SilverCrown" />
        </div>
      );
    else if (this.state.flag === "bronz")
      return (
        <div className="card-flag font3-4">
          <img src="BronzCrown" img={BronzCrown} />
        </div>
      );
    else {
      return <div className="card-flag font3-4">Not found</div>;
    }
  };

  render(props) {
    return (
      <div
        className="card flip-card w-100 h-100 advertisment py-0 shadow position-relative bg-transparent position-relative"
        onClick={this.handleAdvertismentClick}
      >
        {this.flagRender()}

        <div className="card-body flip-card-front w-100 h-100 mh-100 d-flex justify-content-between align-items-center flex-column p-1 ">
          <div className="card-inner-width w-100">
            <h3 className="ad-number font1-2 text-right pt-0">
              {persianJs(this.state.phoneNumber)
                .englishNumber()
                .toString()}
            </h3>
            <hr className="py-0 my-0" />
          </div>
          <div className="card-inner-width">
            <h6 className="card-title font3 text-center  p-0  m-0 py-1">
              {this.state.status} | {this.state.location}
            </h6>
            <p className="card-text font2 text-center p-0 m-0">
              {persianJs(this.state.price)
                .englishNumber()
                .toString()}
              تومان
            </p>
            {this.state.sale ? (
              <p className="card-text line-through font3 line text-center p-0 m-0 pb-1">
                {persianJs(this.state.price)
                  .englishNumber()
                  .toString()}
                تومان
              </p>
            ) : (
              ""
            )}

            <div className="w-100 font3 ">{this.state.text}</div>
          </div>
          <div className="mt-auto card-inner-width  mb-0">
            <hr className="my-1 " />
            <div className="m-0 p-0 d-flex justify-content-between align-items-end">
              <span className="lead font3 h-100">4 ساعت قبل</span>
              <span className="card-rond font2 h-100">رند</span>
            </div>
          </div>
        </div>
        <div className="flip-card-back card d-flex justify-content-center align-items-center flex-column">
          <div className="card-body w-100 h-100 d-flex justify-content-center align-items-center flex-column  ">
            <div className="flip-card-background"></div>
            <h1 className="font1 text-center p-2">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </h1>
            <p className="font2 text-center p-2">احمد روزبه</p>
          </div>
        </div>
      </div>
    );
  }
}
