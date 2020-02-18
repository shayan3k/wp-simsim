import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Seperator from "./Seperator";
import MegaMenu from "./MegaMenu";
import Footer from "./Footer";

export default function PageNotFound() {
  return (
    <>
      <Navbar />
      <Logo />

      <div className="container bg-white ">صفحه مورد نظر یافت نشد</div>

      <Seperator />
      <MegaMenu />
      <Footer />
    </>
  );
}
