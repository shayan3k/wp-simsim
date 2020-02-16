import React from "react";
import Advertisment from "./Advertisment";
import img1 from '../images/sim-card (6).svg'

function FeaturedAds() {
    return (
        <>
            <div className="container bg-white py-1">
                <div className="row">
                    <h3 className="col-12 font1 mt-5">
                        <span className='d-inline-block'>ایتم های ویژه</span>
                        <img src={img1}
                            className='d-inline-block featured-items-title-img'

                            alt="img1"/></h3>
                    <hr className='col-12'/>
                    <div className="row col-12 mx-auto">
                        <div className="col-md-3 d-flex justify-content-center align-items-center p-0 px-1">
                            <Advertisment/>
                        </div>

                        <div className="col-md-3 d-flex justify-content-center align-items-center p-0 px-1">
                            <Advertisment/>
                        </div>

                        <div className="col-md-3 d-flex justify-content-center align-items-center p-0 px-1">
                            <Advertisment/>
                        </div>

                        <div className="col-md-3 d-flex justify-content-center align-items-center p-0 px-1">
                            <Advertisment/>
                        </div>

                        <div className="col-md-3 d-flex justify-content-center align-items-center p-0 px-1">
                            <Advertisment/>
                        </div>

                        <div className="col-md-3 d-flex justify-content-center align-items-center p-0 px-1">
                            <Advertisment/>
                        </div>

                        <div className="col-md-3 d-flex justify-content-center align-items-center p-0 px-1">
                            <Advertisment/>
                        </div>

                        <div className="col-md-3 d-flex justify-content-center align-items-center p-0 px-1">
                            <Advertisment/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeaturedAds;
