import React from 'react'
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({text}) => <div>{text}</div>;

function ContactUsContents(props) {


    return (
        <section className="container p-0 mx-auto">
            <div className="row p-0 m-0">
                <div className="col-md-6 order-2 order-md-1 d-flex justify-content-center align-items-center p-0 ">
                    <div className="googleMap w-100 h-100 ">
                        <GoogleMapReact bootstrapURLKeys={
                                {key: "GoogleApiKey"}
                            }
                            defaultCenter={
                                props.center
                            }
                            defaultZoom={
                                props.zoom
                        }>
                            <AnyReactComponent class="w-100"
                                lat={59.955413}
                                lng={30.337844}/>
                        </GoogleMapReact>
                    </div>
                </div>

                <form className="col-md-6 order-1 order-md-2 pt-5">
                    <h3 className="mb-4">تماس با ما</h3>
                    <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                        <input className="form-control" id="name" name="name" placeholder="تام" type="text"/>
                    </div>
                    <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                        <input className="form-control" id="name" name="name" placeholder="ایمیل" type="text"/>
                    </div>
                    <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                        <input className="form-control" id="password" name="password" placeholder="شماره تماس" type="password"/>
                    </div>
                    <div className="input-group col-10 col-md-9 ml-auto p-0 my-3">
                        <textarea className="form-control" rows="7" id="password2" name="password2" placeholder="موضوع" type="password"/>
                    </div>
                    <button className="btn btn-primary btn-lg my-3" type="submit">
                        ارسال
                    </button>
                </form>
            </div>
        </section>

    )
}

export default ContactUsContents
