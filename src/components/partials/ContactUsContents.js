import React from "react";
import AboutUsContents from "./AboutUsContents";
import ContactDetails from "./ContactDetails";
import ContactUsForm from "./ContactUsForm";
import GoogleMap from "./GoogleMap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function ContactUsContents(props) {
  return (
    <>
      <div className="row m-0 p-0 py-2 py-md-5 mt-1 mb-3 ">
        <div className="col-md-5 m-0 p-0 order-2 order-md-1">
          <ContactUsForm />
        </div>
        <div className="col-md-7  m-0 p-0 order-1 order-md-2">
          <AboutUsContents />
        </div>
      </div>
      <div className="row p-0 m-0">
        <div className="col-12 order-1 order-md-2">
          <ContactDetails />
        </div>
      </div>
    </>
  );
}

export default ContactUsContents;
