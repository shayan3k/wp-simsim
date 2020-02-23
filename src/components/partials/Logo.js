import React from "react";

function Logo() {
  return (
    <div className="container-fluid bg-navbar2 px-0">
      <div className="container row px-0 mx-auto d-flex justify-content-between align-items-center">
        <div className="col-5 m-0 p-0">
          <img
            src="https://via.placeholder.com/400x70"
            alt="spinner"
            className="h-100 w-100 d-block mr-auto"
          />
        </div>

        <div className="col-4 h-100  px-0  d-flex justify-content-start align-items-center">
          {/* <img src={img} alt="logo" className="w-100 h-100 bg-white" /> */}
          <img
            src="https://via.placeholder.com/350x70"
            alt="spinner"
            className="h-100 w-100 d-block mr-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Logo;
