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
    slidesToShow: 6,
    slidesToScroll: props.ltr ? -3 : 3,
    responsive: [
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },

      {
        breakpoint: 1358,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },

      {
        breakpoint: 1135,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },

      {
        breakpoint: 929,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },

      ,
      {
        breakpoint: 707,
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
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);
  console.log(posts);

  return (
    <>
      <Slider
        {...settings}
        className="container specialOffersToggler bg-custom "
      >
        {posts.map(item => {
          let flag = false;
          if (props.flagController === "فوری" && item.sale === "فوری")
            flag = true;
          else if (
            props.flagController === "طلایی" &&
            item.sale === "" &&
            item.value === "طلایی"
          )
            flag = true;
          else if (
            props.flagController === "نقره ای" &&
            item.sale === "" &&
            item.value === "نقره ای"
          )
            flag = true;
          else if (
            props.flagController === "برنز" &&
            item.sale === "" &&
            item.value === "برنز"
          )
            flag = true;

          if (flag === true)
            return (
              <div className="p-3 h-100" key={item.id}>
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
                  handleDeleteBtn={e => console.log(e, "extra")}
                />
              </div>
            );
        })}
      </Slider>
    </>
  );
}

export default SpecialOffers;
