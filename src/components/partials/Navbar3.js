import React from 'react';
import img1 from '../images/sim.svg';
import img2 from '../images/sim (1).svg';

import img3 from '../images/sim (2).svg';
import img4 from '../images/sim (3).svg';
import img5 from '../images/sim (4).svg';
import img6 from '../images/sim-card (1).svg';

function Navbar3() {
    return (

        <div className="container row bg-white rounded px-sm-1 px-md-1 py-3 my-1 mx-auto d-flex justify-content-between align-items-center">

            <div className="col-6 col-md-2 navbar3-items border border-danger d-flex justify-content-center align-items-center flex-column py-3 rounded">
                <img src={img1}
                    className='w-50 mx-auto'
                    alt=""
                    srcset=""/>
                <h6 className='text-center pt-2 mr-1'>جستحوی</h6>
            </div>

            <div className="col-6 col-md-2 navbar3-items border border-info  d-flex justify-content-center align-items-center flex-column py-3 rounded">
                <img src={img2}
                    className='w-50 mx-auto'
                    alt=""
                    srcset=""/>
                <h6 className='text-center pt-2 mr-1'>جستحوی</h6>
            </div>


            <div className="col-6 col-md-2 navbar3-items border border-primary  d-flex justify-content-center align-items-center flex-column py-3 rounded">
                <img src={img3}
                    className='w-50 mx-auto'
                    alt=""
                    srcset=""/>
                <h6 className='text-center pt-2 mr-1'>جستحوی</h6>
            </div>


            <div className="col-6 col-md-2 navbar3-items border border-secondary  d-flex justify-content-center align-items-center flex-column py-3 rounded">
                <img src={img4}
                    className='w-50 mx-auto'
                    alt=""
                    srcset=""/>
                <h6 className='text-center pt-2 mr-1'>جستحوی</h6>
            </div>

            <div className="col-6 col-md-2 navbar3-items border border-success  d-flex justify-content-center align-items-center flex-column py-3 rounded">
                <img src={img5}
                    className='w-50 mx-auto'
                    alt=""
                    srcset=""/>
                <h6 className='text-center pt-2 mr-1'>جستحوی</h6>
            </div>


            <div className="col-6 col-md-2 navbar3-items border border-warning  d-flex justify-content-center align-items-center flex-column py-3 rounded">
                <img src={img6}
                    className='w-50 mx-auto'
                    alt=""
                    srcset=""/>
                <h6 className='text-center pt-2 mr-1'>جستحوی</h6>
            </div>


        </div>


    )
}

export default Navbar3
