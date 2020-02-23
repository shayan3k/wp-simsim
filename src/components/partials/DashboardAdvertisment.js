import React, { useState, useEffect } from "react";
import Advertisment from "./Advertisment";
import { JWTHeader } from "../services/Auth";
import secureStorage from "../services/Storage";
import { useStoreState } from "easy-peasy";
import axios from "axios";

function DashboardAdvertisment(props) {
  const [posts, setPosts] = useState([]);
  const postUri = useStoreState(state => state.urls.postUri);
  const userUri = useStoreState(state => state.urls.userUri);
  const baseUrl = useStoreState(state => state.urls.baseUrl);

  useEffect(() => {
    axios
      .get(baseUrl + userUri, JWTHeader())
      .then(user => {
        console.log(user.data.id);
        axios
          .get(baseUrl + postUri)
          .then(res => {
            console.log(user.data.id);

            setPosts(res.data.filter(item => item.author.id === user.data.id));
          })
          .catch(e => {
            console.log(e.response);
          });
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
    <div className="container bg-white my-0 DashboardAdvertisment">
      <div className="row p-0 m-0">
        {posts.map(item => (
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
              id={item.id}
              sale={item.sale}
              secondPrice={item.secondprice}
              handleDeleteBtn={handleDeleteBtn}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardAdvertisment;
