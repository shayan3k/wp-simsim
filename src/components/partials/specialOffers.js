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
    <>
      <Slider
        {...settings}
        className="bg-secondary container specialOffersToggler"
      >
        {posts.map(item => (
          <div className="p-3 h-100" key={item.acf.id}>
            <Advertisment
              phoneNumber={item.acf.phonenumber}
              status={item.acf.status}
              location={item.acf.location}
              price={item.acf.price}
              text={item.acf.text}
              sellerPhoneNumber={item.acf.sellerphonenumber}
              sellerName={item.acf.sellername}
              key={item.acf.id}
              sale={props.sale}
            />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SpecialOffers;
