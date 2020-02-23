import React from "react";
import persianJs from "persianjs";
import flag from "../images/sim-card.png";

export default function Advertiser(props) {
  return (
    <div className="card w-100 h-100 border-0 position-relative">
      <div className="advertiser-flag-icon">
        <img className="w-100 h-100" src={flag} alt="سیمکارت" />
      </div>
      <div className="card-body font4 card-body-advertiser px-0">
        <h4 className="text-center">{props.ShopName}</h4>
        <hr />
        <div className="row p-0 m-0">
          {props.PhoneNumbers.map(item => (
            <div className="col-6 lead d-inline-block p-1 font2">
              <div className="p-1 m-0  bg-advertisers-sim text-center shadow-lg white-space-nowrap">
                {persianJs(item.numbers)
                  .englishNumber()
                  .toString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-footer font2-3 row p-0 m-0 d-flex justify-content-between align-items-center card-body-advertiser">
        <div className="col-12">
          <div className="font2 text-right py-1">{props.AdvertiserName}</div>
        </div>

        <p className="col-6 m-0 p-0 border-left white-space-nowrap">
          {persianJs(props.advertiserphonenumbers.advertiserphonenumber1)
            .englishNumber()
            .toString()}
          <i className="fa fa-mobile fa-1x px-1 font2" aria-hidden="true"></i>
        </p>
        <p className="col-6 m-0 p-0 py-1 white-space-nowrap">
          {persianJs(props.advertiserphonenumbers.advertiserphonenumber2)
            .englishNumber()
            .toString()}
          <i className="fas fa-phone px-1 font2"></i>
        </p>
      </div>
    </div>
  );
}
