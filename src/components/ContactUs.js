import React, { Component } from "react";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import ContactUsContents from "./partials/ContactUsContents.js";
import FooterSeperator from "./partials/FooterSeperator";
import Footer from "./partials/Footer";

export default class ContactUs extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Logo />
        <ContactUsContents />
        <FooterSeperator />
        <Footer />
      </>
    );
  }
}
