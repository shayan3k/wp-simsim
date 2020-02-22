import React, { useState, useEffect } from "react";
import Advertisment from "./Advertisment";
import AdvertismentApply from "./AdvertismentApply";
import { useStoreState } from "easy-peasy";
import { JWTHeader } from "../services/Auth";
import secureStorage from "../services/Storage";
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

  const handleDeleteBtn = (e, id, sellerPhoneNumber) => {
    if (secureStorage.getItem("username") === sellerPhoneNumber) {
      axios
        .delete(baseUrl + "/wp/v2/myadvertisement/" + id, JWTHeader())
        .then(res => {
          console.log(res, posts, "done");

          setPosts(
            posts.filter(item => {
              if (item.id !== id) return item;
            })
          );
        })
        .catch(e => console.log(e.response));
    }
  };

  return (
    <div className="container bg-white my-0 mainAdsToggler">
      <div className="d-flex justify-content-start align-items-stretch flex-wrap p-0 m-0">
        {posts.map((item, index) => {
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
            <>
              {index % 5 == 0 ? (
                <div className="m-0 px-1 py-3 flex-grow-1">
                  <AdvertismentApply />
                </div>
              ) : (
                ""
              )}
              <div className="m-0 px-1 py-3  flex-grow-1 " key={item.id}>
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
                  id={item.id}
                  handleDeleteBtn={handleDeleteBtn}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default MainAds;
