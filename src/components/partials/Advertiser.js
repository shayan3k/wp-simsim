import React from "react";
import img from "../images/irancell.jpg";

export default function Advertiser() {
  return (
    <div className="card w-100 h-100">
      <div className="card-header d-flex justify-content-between align-content-center px-1">
        <span className="font3">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </span>
        <h6 className="font3">سیدبنس سیمکارت</h6>
      </div>
      <div className="card-body font2">
        <div
          className="mask-advertisers"
          style={{
            backgroundImage: "url(" + img + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: "0"
          }}
        ></div>
        <p>فروشکاه تذیب بهترین ارضه کننده مواد شوینده و پاک ککنده توالت.</p>
        <p>فروشکاه تذیب بهترین ارضه کننده مواد شوینده و پاک ککنده توالت.</p>
        <p>فروشکاه تذیب بهترین ارضه کننده مواد شوینده و پاک ککنده توالت.</p>
      </div>
      <div className="card-footer font4 row p-0 m-0 d-flex justify-content-between align-items-center">
        <p className="col-6 m-0 p-0 border-left">
          09127172462
          <i className="fa fa-mobile fa-1x px-1 font2" aria-hidden="true"></i>
        </p>
        <p className="col-6 m-0 p-0 py-1 ">
          09127172462
          <i className="fas fa-phone px-1 font2"></i>
        </p>
      </div>
    </div>
  );
}
