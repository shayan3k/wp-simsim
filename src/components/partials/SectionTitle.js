import React, { useState, useEffect, useRef } from "react";
import { TimelineLite, Power4 } from "gsap";

function SectionTitle(props) {
  const [toggle, setToggle] = useState(false);
  const [tl, setTl] = useState(
    new TimelineLite({ paused: true, reversed: true })
  );
  useEffect(() => {
    tl.to(document.querySelector(`.${props.collapse}`), 0.3, {
      ease: Power4.easeOut,
      height: "0",
      visibility: "hidden",
      overflow: "hidden"
    });
  }, []);

  const handleSectioTitleCollapse = e => {
    e.preventDefault();
    setToggle(!toggle);
    toggle ? tl.reverse() : tl.play();
  };

  return (
    <div className="container row py-0 mt-2 p-0 d-flex justify-content-between align-content-center mx-auto">
      <div className="col-8 pl-0 col-md-8 d-flex justify-content-start align-items-center p-0 pb-1 pr-1">
        <img
          src="https://via.placeholder.com/150x20/FFFF00"
          alt="logo"
          className="w-100 h-100"
        />
      </div>
      <div className="col-4 btn sectionTitle btn-light font1 p-0 py-1 border-bottom">
        <div
          className="sectionTitleToggler"
          onClick={e => handleSectioTitleCollapse(e)}
        >
          <i className="fas fa-plus"></i>
        </div>
        <div className="row p-0 m-0 mx-auto w-100 h-100 d-flex justify-content-center align-items-center sectionTitle">
          <div className="col-9 p-0 sectionTitleText">{props.title}</div>
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;
