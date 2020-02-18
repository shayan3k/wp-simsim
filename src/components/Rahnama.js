import React from "react";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import Seperator from "./partials/Seperator";
import Footer from "./partials/Footer";
import RahnamaContents from "./partials/RahnamaContents";
import SectionTitle from "./partials/SectionTitle";

function Rahnama() {
  return (
    <>
      <Navbar />
      <Logo />
      <SectionTitle title="راهنما" />
      <RahnamaContents />
      <Seperator />
      <Footer />
    </>
  );
}

export default Rahnama;
