import React, { useEffect } from "react";
import vip from "../images/vip.png";
import { TimelineMax } from "gsap";
import persianJs from "persianjs";

export default function VipAdvertiser() {
  useEffect(() => {
    let lt = new TimelineMax({ repeat: -1 });
    lt.to(".vip-text", 0.3, { css: { transform: "scale(0.7)" } });
    lt.play();
  }, []);

  return (
    <div className="card w-100 h-100 border-0 position-relative">
      <div className="advertiser-vip-flag-icon">
        <img className="w-100 h-100" src={vip} alt="vip" />
      </div>
      <div className="card-header card-header-vip-advertiser d-flex justify-content-end align-content-center px-1 py-4">
        <h6 className="font1 my-auto pr-1">
          بزرگترین مرکز خرید و فروش سیمکارت
        </h6>
      </div>
      <div className="card-body font2 card-body-vip-advertiser">
        <h4 className="text-center">سیم گستر</h4>
        <hr />
        <div className="row p-0 m-0">
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg rounded">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim text-center shadow-lg">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
        </div>
        <h4 className="py-4 text-center" style={{ fontWeight: 1000 }}>
          برای صرفه جویی در وقت و هزینه خود با کارشناسان ما در تماس باشید
        </h4>
        <hr />
        <p className="text-right pt-1 font-1">احمد عباسی </p>
        <div className="d-flex justify-content-center align-content-center">
          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim-owner text-center shadow-lg   font0">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim-owner text-center shadow  -lg   font0">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>

          <div className="col-4 lead d-inline-block p-1">
            <div className="p-1 m-0  bg-vip-advertisers-sim-owner text-center shadow-lg   font0">
              {persianJs("09127170126")
                .englishNumber()
                .toString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
