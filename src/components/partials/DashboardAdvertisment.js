import React, { useState, useEffect } from "react";
import img1 from "../images/sim.svg";
import Advertisment from "./Advertisment";
import AdvertismentApply from "./AdvertismentApply";
import { JWTHeader } from "../services/Auth";
import axios from "axios";

function DashboardAdvertisment(props) {
  const [posts, setPosts] = useState([]);
  const baseUrl = "http://localhost/wordpress/wp-json";

  const [advertisments, setAdvertisments] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl + props.userUri, JWTHeader())
      .then(user => {
        console.log(user.data.id);
        axios
          .get(baseUrl + props.postUri)
          .then(res => {
            console.log(user.data.id);

            setAdvertisments(
              res.data.filter(item => item.author.id === user.data.id)
            );
          })
          .catch(e => {
            console.log(e.response);
          });
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className="container bg-white my-0 DashboardAdvertisment">
      <div className="row p-0 m-0">
        {advertisments.map(item => (
          <div
            className="row col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2 mx-auto mx-0 p-0 px-1 py-3"
            key={item.id}
          >
            <Advertisment
              phoneNumber={item.phonenumber}
              status={item.status}
              location={item.location}
              price={item.price}
              text={item.text}
              sellerPhoneNumber={item.sellerphonenumber}
              sellerName={item.sellername}
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

export default DashboardAdvertisment;
