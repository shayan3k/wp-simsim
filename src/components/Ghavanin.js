import React from "react";
import GhavaninContents from "./partials/GhavaninContents";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import Seperator from "./partials/Seperator";
import FooterSeperator from "./partials/FooterSeperator";
import Footer from "./partials/Footer";

export default function Ghavanin() {
  return (
    <>
      <Navbar />
      <Logo />
      <Seperator />
      <GhavaninContents />
      <FooterSeperator />
      <Footer />
    </>
  );
}
