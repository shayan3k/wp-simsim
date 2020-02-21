import React from "react";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import FooterSeperator from "./partials/FooterSeperator";
import Footer from "./partials/Footer";

export default function PageNotFound() {
  return (
    <>
      <Navbar />
      <Logo />

      <div className="container bg-white py-5 mt-1">صفحه مورد نظر یافت نشد</div>

      <FooterSeperator />
      <Footer />
    </>
  );
}
