import React, { useState, useEffect } from "react";
import Navbar from "./partials/Navbar";
import Logo from "./partials/Logo";
import Seperator from "./partials/Seperator";
import MegaMenu from "./partials/MegaMenu";
import Footer from "./partials/Footer";
import NewAdvertisment from "./partials/NewAdvertisment";
import SectionTitle from "./partials/SectionTitle";
import DashboardAdvertisment from "./partials/DashboardAdvertisment";
import FooterSeperator from "./partials/FooterSeperator";
export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Logo />
      <Seperator />
      <MegaMenu />
      <SectionTitle title="تبلیغ جدید" collapse="DashboardAdvertisment" />
      <NewAdvertisment />
      <SectionTitle title="سیم کارت های من" collapse="DashboardAdvertisment" />
      <DashboardAdvertisment />
      <FooterSeperator />
      <Footer />
    </>
  );
}
