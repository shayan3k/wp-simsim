import React, { Component } from "react";

export default class ShopAccordition extends Component {
  render() {
    return (
      <div className="col-sm-12 col-md-3 p-0 mx-auto my-3 px-2">
        <aside
          className="shop-cagetory p-0 w-100 d-flex justify-content-center align-content-center flex-column"
          id="categoryExample"
        >
          <div className="card border-0">
            <button
              aria-controls="menu-1"
              aria-expanded="true"
              className="btn btn-primary rounded-0 p-3 w-100 d-flex justify-content-between align-items-center shop-category-btn"
              data-target="#menu-1"
              data-toggle="collapse"
              type="button"
            >
              <i className="fas fa-eject fa-rotate-270 c-black"></i>
              <h4 className="text-capitalize c-black">همراه اول</h4>
            </button>

            <div
              aria-labelledby="menuOne"
              className="collapse show"
              data-parent="#categoryExample"
              id="menu-1"
            >
              <div className="card-body p-0">
                <a className="shop-category-link d-block w-100 " href="#">
                  کد 1
                </a>
                <a className="shop-category-link d-block w-100 " href="#">
                  کد 2
                </a>
                <a className="shop-category-link d-block w-100 " href="#">
                  کد 3
                </a>
                <a className="shop-category-link d-block w-100 " href="#">
                  کد 4
                </a>
                <a className="shop-category-link d-block w-100 " href="#">
                  5 کد
                </a>
                <a className="shop-category-link d-block w-100 " href="#">
                  کد 6
                </a>
                <a className="shop-category-link d-block w-100 " href="#">
                  کد 7
                </a>
                <a className="shop-category-link d-block w-100 " href="#">
                  8 کد
                </a>
                <a className="shop-category-link d-block w-100 " href="#">
                  کد 9
                </a>
                <a className="shop-category-link d-block w-100 " href="#">
                  اعتباری
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <button
              aria-controls="menu-2"
              aria-expanded="false"
              className="btn btn-primary rounded-0 p-3 w-100 d-flex justify-content-between align-items-center shop-category-btn"
              data-target="#menu-2"
              data-toggle="collapse"
              type="button"
            >
              <i className="fas fa-eject fa-rotate-270"></i>
              <h4 className="text-capitalize c-black">ایرانسل</h4>
            </button>

            <div
              aria-labelledby="menuTwo"
              className="collapse"
              data-parent="#categoryExample"
              id="menu-2"
            >
              <div className="card-body p-0">
                <a className="shop-category-link d-block w-100 " href="#">
                  اعتباری
                </a>

                <a className="shop-category-link d-block w-100 " href="#">
                  دایمی
                </a>
              </div>
            </div>
          </div>

          <div className="card ">
            <button
              aria-controls="menu-3"
              aria-expanded="false"
              className="btn btn-primary rounded-0 p-3 w-100 d-flex justify-content-between align-items-center shop-category-btn"
              data-target="#menu-3"
              data-toggle="collapse"
              type="button"
            >
              <i className="fas fa-eject fa-rotate-270"></i>
              <h4 className="text-capitalize c-black">رایتل</h4>
            </button>

            <div
              aria-labelledby="menuThree"
              className="collapse"
              data-parent="#categoryExample"
              id="menu-3"
            >
              <div className="card-body p-0">
                <a className="shop-category-link d-block w-100 " href="#">
                  اعتباری
                </a>

                <a className="shop-category-link d-block w-100 " href="#">
                  دایمی
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    );
  }
}
