import React, { useState, useEffect } from "react";
import img1 from "../images/sim.svg";
import Advertisment from "./Advertisment";
import AdvertismentApply from "./AdvertismentApply";
import { useStoreState } from "easy-peasy";
import axios from "axios";

function MainAds(props) {
  const [posts, setPosts] = useState([]);
  const SimOperator = useStoreState(state => state.searchBox.operator);
  const SimStatus = useStoreState(state => state.searchBox.status);
  const SimValue = useStoreState(state => state.searchBox.operator);
  const SimRond = useStoreState(state => state.searchBox.status);
  const SimCode = useStoreState(state => state.searchBox.status);
  const SimLocation = useStoreState(state => state.searchBox.operator);
  const SimPriceRange = useStoreState(state => state.searchBox.status);

  const baseUrl = "http://localhost/wordpress/wp-json";

  useEffect(() => {
    axios
      .get(baseUrl + props.uri)
      .then(response => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div className="container bg-white my-0 mainAdsToggler">
      <div className="row p-0 m-0">
        {posts.map(item => {
          if (SimStatus != "" && SimStatus !== item.bodytext) {
            return;
          }

          console.log(SimStatus, item.bodytext);
          return (
            <div
              className="row col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 mx-auto mx-0 p-0 px-1 py-3"
              key={item.id}
            >
              <Advertisment
                phoneNumber={item.phonenumber}
                status={item.bodytext}
                location={item.location}
                price={item.price}
                text={item.text}
                sellerPhoneNumber={item.sellerphonenumber}
                sellerName={item.sellername}
                key={item.id}
              />
            </div>
          );
        })}

        <div className="row col-12 mx-auto mx-0 p-0 px-1 py-3">
          <AdvertismentApply />
        </div>
      </div>
    </div>
  );
}

export default MainAds;
