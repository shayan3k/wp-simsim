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

      <div className="container bg-white py-5 mt-1">
        <p>صفحه مورد نظر یافت نشد</p>
        برای جستجو سیمکارت مورد نظر روی <a href="/">لینک</a> کلیک کنید
      </div>

      <FooterSeperator />
      <Footer />
    </>
  );
}
