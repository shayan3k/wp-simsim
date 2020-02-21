import React, { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { TimelineLite, Power4 } from "gsap";
import { Link } from "react-router-dom";
import TimeAndDate from "./TimeAndDate";
import Axios from "axios";

function Navbar() {
  const [menuTogglerAnimation, setMenuTogglerAnimation] = useState(
    new TimelineLite({ paused: true })
  );
  const [Navbar, setNavbar] = useState([]);
  const baseUrl = "http://localhost/wordpress/wp-json";

  //Navbar useEffect
  useEffect(() => {
    Axios.get(baseUrl + "/menus/v1/menus/Navbar1")
      .then(res => {
        console.log(res.data.items);
        setNavbar(res.data.items);
      })
      .catch(e => console.log(e.response));

    menuTogglerAnimation
      .to(".MenuOpenner", 0.3, {
        css: { transform: "translateX(-10px)", opacity: "0" }
      })
      .to(".MenuCloser", 0.1, {
        css: { width: "", height: "", visibility: "" }
      })
      .to(`.mobile-menu`, 0.3, {
        ease: Power4.easeOut,
        height: "100%",
        visibility: "visible",
        margin: "",
        padding: ""
      });
    let el1 = document.querySelector(".mobile-menu");
    let el2 = document.querySelector(".MenuCloser");
    el1.style.height = 0;
    el1.style.padding = 0;
    el1.style.margin = 0;
    el1.style.padding = 0;
    el1.style.margin = 0;
    el2.style.width = 0;
    el2.style.width = 0;
    el2.style.visibility = "hidden";
  }, []);
  const handleMenuOpenner = e => {
    menuTogglerAnimation.play();
  };
  const handleMenuCloser = e => {
    menuTogglerAnimation.reverse();
  };
  return (
    <nav className="container-fluid row px-0 w-100 myNavbar" id="myNavbar">
      <div className="container row px-0 mx-auto d-flex justify-content-between align-items-center">
        <ul className="navbar-brand pl-0">
          <li className="nav-item navbar-item-active mr-auto c-white">
            <i
              className="fa fa-calendar pr-3 c-white fa-2x"
              aria-hidden="true"
            ></i>
            <TimeAndDate />
          </li>
        </ul>
        <ul className="navbar-ul d-flex d-md-none">
          <li className="nav-link p-0 MenuOpenner" onClick={handleMenuOpenner}>
            <i className="fa fa-bars fa-2x"></i>
          </li>
          <li className="nav-link MenuCloser p-0 " onClick={handleMenuCloser}>
            <i className="fa fa-times fa-2x"></i>
          </li>
        </ul>

        <ul className="navbar-ul d-none d-md-flex ">
          {Navbar.map(item => {
            return (
              <li className="nav-item">
                <Link className="nav-link font3" to={"/wordpress" + item.url}>
                  {item.post_title}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="w-100 mobile-menu">
          {Navbar.slice(0)
            .reverse()
            .map(item => (
              <Link className="mobile-menu-item" to={"/wordpress" + item.url}>
                <span> {item.post_title}</span>
              </Link>
            ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
