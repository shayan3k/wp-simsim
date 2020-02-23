import React, { useEffect, useState } from "react";
import { useStoreState } from "easy-peasy";
import axios from "axios";
import persianJs from "persianjs";

export default function VipAdvertiser() {
  const [Title, setTitle] = useState();
  const [ShopName, setShopName] = useState();
  const [PhoneNumbers, setPhoneNumbers] = useState();
  const [AdvertiserName, setAdvertiserName] = useState();
  const [Text, setText] = useState();
  const [AdvertiserPhoneNumber, setAdvertiserPhoneNumber] = useState();
  const baseUrl = useStoreState(state => state.urls.baseUrl);
  const vipAdvertiser = useStoreState(state => state.urls.vipAdvertiser);

  useEffect(() => {
    axios
      .get(baseUrl + vipAdvertiser)
      .then(res => {
        res.data.map(item => {
          if (item.slug === "vipadvertiser") {
            setTitle(item.acf.title);
            setShopName(item.acf.shopname);
            setPhoneNumbers(item.acf.phonenumbers);
            setAdvertiserName(item.acf.advertisername);
            setText(item.acf.text);
            setAdvertiserPhoneNumber(item.acf.advertiserphonenumbers);
          }
        });
      })
      .catch(e => console.log(e.response));
  }, []);

  return (
    <div className="card w-100 h-100 border-0 position-relative">
      <div className="advertiser-vip-flag-icon">
        {/* <img className="w-100 h-100" src={vip} alt="vip" /> */}
      </div>
      <div className="card-header card-header-vip-advertiser d-flex justify-content-end align-content-center px-1 py-4">
        <h6 className="font1 my-auto pr-1">{Title}</h6>
      </div>
      <div className="card-body font2 card-body-vip-advertiser px-0">
        <h4 className="text-center">{ShopName}</h4>
        <hr />
        <div className="row p-0 m-0">
          {PhoneNumbers
            ? PhoneNumbers.map(item => (
                <div className="col-4 lead d-inline-block p-1">
                  <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg rounded white-space-nowrap">
                    {persianJs(item.numbers)
                      .englishNumber()
                      .toString()}
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
      <div className="card-footer card-footer-vip-advertiser">
        <h4 className="py-4 text-center" style={{ fontWeight: 1000 }}>
          {Text}
        </h4>
        <hr />
        <p className="text-right pt-1 font-1">{AdvertiserName}</p>
        <div className="d-flex justify-content-center align-content-center">
          {AdvertiserPhoneNumber
            ? AdvertiserPhoneNumber.map(item => (
                <div className="col-4 lead d-inline-block p-1">
                  <div className="p-1 m-0  bg-vip-advertisers-sim-owner text-center shadow-lg  white-space-nowrap font0">
                    {persianJs(item.advertiserphonenumber)
                      .englishNumber()
                      .toString()}
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
