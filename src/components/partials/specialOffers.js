import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Advertisment from "./Advertisment";
import axios from "axios";

function SpecialOffers(props) {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3100,
    infinite: true,
    speed: 650,
    slidesToShow: 5,
    slidesToScroll: props.ltr ? -5 : 5,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },

      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },

      {
        breakpoint: 997,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },

      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },

      ,
      {
        breakpoint: 618,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  const [posts, setPosts] = useState([]);
  const baseUrl = "http://localhost/wordpress/wp-json";

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
    <>
      <Slider
        {...settings}
        className="container specialOffersToggler bg-custom "
      >
        {posts.map(item => (
          <div className="p-3 h-100" key={item.id}>
            <Advertisment
              phoneNumber={item.phonenumber}
              status={item.bodytext}
              location={item.location}
              price={item.price}
              text={item.text}
              sellerPhoneNumber={item.sellerphonenumber}
              sellerName={item.sellername}
              key={item.id}
              sale={props.sale}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SpecialOffers;
