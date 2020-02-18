import React, { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { TimelineLite, Power4 } from "gsap";
import { Link } from "react-router-dom";
import moment from "moment-jalaali";
import persianJs from "persianjs";

const JalaliDateAndTime = () => {
  let m = moment();
  let today = new Date("January 1, 2008 11:10:00");
  console.log(today.getDay());
  let dayOfWeek = () => {
    switch (today.getDay()) {
      case 1:
        return "دوشنبه";
        break;

      case 2:
        return "سه شنبه";
        break;
      case 3:
        return "چهارشنبه";
        break;

      case 4:
        return "پنجشنبه";
        break;
      case 5:
        return "جمعه";
        break;

      case 6:
        return "شنبه";
        break;
      case 7:
        return "یکشنبه";
        break;
    }
  };

  let month = () => {
    switch (m.jMonth()) {
      case 0:
        return "فروردین";
        break;

      case 1:
        return "اردیبهشت";
        break;

      case 2:
        return "خرداد";
        break;

      case 3:
        return "تیر";
        break;

      case 4:
        return "مرداد";
        break;

      case 5:
        return "شهریور";
        break;

      case 6:
        return "مهر";
        break;

      case 7:
        return "آبان";
        break;

      case 8:
        return "آذر";
        break;

      case 9:
        return "دی";
        break;

      case 10:
        return "بهمن";
        break;

      case 11:
        return "اسفتد";
        break;
    }
  };

  let clock = persianJs(m.format("HH:mm"))
    .englishNumber()
    .toString();

  let date =
    dayOfWeek() +
    " " +
    persianJs(m.jDate())
      .englishNumber()
      .toString() +
    " " +
    month();

  return date + " | " + clock;
};

function Navbar() {
  const authToken = useStoreState(state => state.auth.token);
  const userEmail = useStoreState(state => state.auth.userEmail);
  const setAuth = useStoreActions(actions => actions.auth.setAuth);
  const [counter, setCounter] = useState(-9999);
  const [menuTogglerAnimation, setMenuTogglerAnimation] = useState(
    new TimelineLite({ paused: true })
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);

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

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleMenuOpenner = e => {
    menuTogglerAnimation.play();
  };

  const handleMenuCloser = e => {
    menuTogglerAnimation.reverse();
  };

  return (
    <nav className="container-fluid row px-0 w-100 myNavbar">
      <div className="container row px-0 mx-auto d-flex justify-content-between align-items-center">
        <ul className="navbar-brand pl-0">
          <li className="nav-item navbar-item-active mr-auto c-white">
            <i
              className="fa fa-calendar pr-3 c-white fa-2x"
              aria-hidden="true"
            ></i>
            <JalaliDateAndTime style={{ display: "none" }} />
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
          <li className="nav-item active ml-auto">
            <Link className="nav-link font3" to="/wordpress/contact-us">
              تماس با ما
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link font3" to="/#">
              تبلیغات
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link font3" to="/wordpress/faq">
              سوالات متداول
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link font3" to="/wordpress/guide">
              راهنما
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link font3" to="#">
              فروش سیمکارت
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link font3" to="#">
              خرید سیمکارت
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link font3" to="/wordpress/">
              خانه
            </Link>
          </li>
        </ul>
        <ul className="w-100 mobile-menu">
          <Link className="mobile-menu-item">
            <span>خانه</span>
          </Link>
          <Link className="mobile-menu-item">
            <span> خرید سیمکارت</span>
          </Link>
          <Link className="mobile-menu-item">
            <span> فروش سیمکارت</span>
          </Link>
          <Link className="mobile-menu-item">
            <span> راهنما</span>
          </Link>

          <Link className="mobile-menu-item">
            <span> سوالات متداول</span>
          </Link>

          <Link className="mobile-menu-item">
            <span> تبلیغات</span>
          </Link>

          <Link className="mobile-menu-item">
            <span> تماس با ما</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
