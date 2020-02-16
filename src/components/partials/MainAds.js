import React, { useState, useEffect } from "react";
import img1 from "../images/sim.svg";
import Advertisment from "./Advertisment";
import AdvertismentApply from "./AdvertismentApply";
import axios from "axios";

function MainAds(props) {
  const [posts, setPosts] = useState([]);
  const baseUrl = "http://localhost/wordpress/wp-json/wp/v2";

  useEffect(() => {
    axios
      .get(baseUrl + props.uri)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container bg-white my-0 mainAdsToggler">
      <div className="row p-0 m-0">
        {posts.map(item => (
          <div
            className="row col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 mx-auto mx-0 p-0 px-1 py-3"
            key={item.acf.id}
          >
            <Advertisment
              phoneNumber={item.acf.phonenumber}
              status={item.acf.status}
              location={item.acf.location}
              price={item.acf.price}
              text={item.acf.text}
              sellerPhoneNumber={item.acf.sellerphonenumber}
              sellerName={item.acf.sellername}
              key={item.acf.id}
            />
          </div>
        ))}

        <div className="row col-12 mx-auto mx-0 p-0 px-1 py-3">
          <AdvertismentApply />
        </div>
      </div>
    </div>
  );
}

export default MainAds;
