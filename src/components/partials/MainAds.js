import React, { useState, useEffect } from "react";
import img1 from "../images/sim.svg";
import Advertisment from "./Advertisment";
import AdvertismentApply from "./AdvertismentApply";
import { useStoreState } from "easy-peasy";
import axios from "axios";

function MainAds(props) {
  const [posts, setPosts] = useState([]);
  const SimStatus = useStoreState(state => state.searchBox.status);
  const SimValue = useStoreState(state => state.searchBox.value);
  const SimRond = useStoreState(state => state.searchBox.rond);
  const SimCode = useStoreState(state => state.searchBox.code);
  const SimLocation = useStoreState(state => state.searchBox.location);
  const SimPriceRange = useStoreState(state => state.searchBox.priceRange);

  const baseUrl = "http://localhost/wordpress/wp-json";

  useEffect(() => {
    axios
      .get(baseUrl + props.uri)
      .then(response => {
        setPosts(response.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className="container bg-white my-0 mainAdsToggler">
      <div className="row p-0 m-0">
        {posts.map(item => {
          if (SimStatus != "" && SimStatus !== item.simstatus) return;
          if (SimValue != "" && SimValue !== item.value) return;
          if (SimRond != "" && SimRond !== item.rond) return;
          if (SimCode != "" && SimCode !== item.code) return;
          if (SimLocation != "" && SimLocation !== item.location) return;
          if (SimPriceRange != "") {
            if (SimPriceRange === "0") {
              if (parseInt(item.price) > 1000000) return;
            } else if (SimPriceRange === "1") {
              if (parseInt(item.price) > 10000000) return;
            } else if (SimPriceRange === "2") {
              if (parseInt(item.price) > 90000000) return;
            } else if (SimPriceRange === "3") {
              if (parseInt(item.price) < 9000000) return;
            }
          }

          return (
            <div
              className="row col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 mx-auto mx-0 p-0 px-1 py-3"
              key={item.id}
            >
              <Advertisment
                phoneNumber={item.phonenumber}
                status={item.simstatus}
                rond={item.rond}
                code={item.code}
                value={item.value}
                operator={item.operator}
                location={item.location}
                price={item.price}
                text={item.text}
                sellerPhoneNumber={item.author.username}
                sellerName={item.author.display_name}
                key={item.id}
                sale={item.sale}
                secondPrice={item.secondprice}
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
