import React from "react";
import Advertiser from "./Advertiser";
import img from "../images/irancell.jpg";
import VipAdvertiser from "./VipAdvertiser";

function Advertisers() {
  return (
    <div className="container mx-auto py-0 AdvertisersToggler">
      <div className="row bg-secondary pb-5">
        <div className="col-lg-6 order-2 order-lg-1 row p-0 py-4 m-0">
          <div className="col-lg-6 d-flex justify-content-center align-content-center py-2">
            <div className="advertiser">
              <Advertiser />
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center align-content-center py-2">
            <div className="advertiser">
              <Advertiser />
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center align-content-center py-2">
            <div className="advertiser">
              <Advertiser />
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center align-content-center py-2">
            <div className="advertiser">
              <Advertiser />
            </div>
          </div>
        </div>
        <div className="col-lg-6 m-0 p-0 order-1 order-lg-2 row p-2 py-4 m-0 mx-auto">
          <div className="vip-advertiser col-12 d-flex justify-content-center align-content-center py-2 font1">
            <VipAdvertiser />
          </div>
        </div>
        <div className="col-12 order-3 row p-0 m-0">
          <div className="col-12 col-lg-3 d-flex justify-content-center align-content-center py-2">
            <div className="advertiser">
              <Advertiser />
            </div>
          </div>

          <div className="col-12 col-lg-3 d-flex justify-content-center align-content-center py-2">
            <div className="advertiser">
              <Advertiser />
            </div>
          </div>

          <div className="col-12 col-lg-3 d-flex justify-content-center align-content-center py-2">
            <div className="advertiser">
              <Advertiser />
            </div>
          </div>

          <div className="col-12 col-lg-3 d-flex justify-content-center align-content-center py-2">
            <div className="advertiser">
              <Advertiser />
            </div>
          </div>

          <div className="col-12 col-lg-3 d-flex justify-content-center align-content-center py-2">
            <div className="advertiser">
              <Advertiser />
            </div>
          </div>

          <div className="col-12 col-lg-3 d-flex justify-content-center align-content-center py-2">
            <div className="advertiser">
              <Advertiser />
            </div>
          </div>

          <div className="col-12 col-lg-3 d-flex justify-content-center align-content-center py-2">
            <div className="advertiser">
              <Advertiser />
            </div>
          </div>

          <div className="col-12 col-lg-3 d-flex justify-content-center align-content-center py-2">
            <div className="advertiser">
              <Advertiser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertisers;
