import React, { Component } from "react";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import ContactUsContents from "./partials/ContactUsContents.js";
import FooterSeperator from "./partials/FooterSeperator";
import Footer from "./partials/Footer";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
  }

  render() {
    return (
      <>
        <Navbar />
        <Logo />
        <ContactUsContents center={this.state.center} zoom={this.state.zoom} />
        <FooterSeperator />
        <Footer />
      </>
    );
  }
}
