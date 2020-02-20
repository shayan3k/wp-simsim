import React, { Component, useEffect } from "react";
import Advertisment from "./partials/Advertisment";
import Navbar from "./partials/Navbar";
import Ad1 from "./partials/Ad1";
import Ad2 from "./partials/Ad2";
import Ad3 from "./partials/Ad3";
import MegaMenu from "./partials/MegaMenu";
import Navbar3 from "./partials/Navbar3";
import Footer from "./partials/Footer";
import SearchBox from "./partials/SearchBox";
import FeaturedAds from "./partials/FeaturedAds";
import MainAds from "./partials/MainAds";
import Advertisers from "./partials/Advertisers";
import SpecialOffers from "./partials/specialOffers";
import ShopAccordition from "./partials/ShopAccordition.js";
import SectionTitle from "./partials/SectionTitle";
import Logo from "./partials/Logo";
import Seperator from "./partials/Seperator";

export default class Shop extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Logo />
        <Seperator />
        <MegaMenu />
        <SectionTitle title="فروشهای فوری" collapse="specialOffersToggler" />
        <SpecialOffers uri="/custom-routes/v1/advertisments" sale={true} />
        {/* <SectionTitle title="جستجو" collapse="searchBox" />
        <SearchBox />
        <SectionTitle title="سیم کارت یافت شده" collapse="mainAdsToggler" />
        <MainAds uri="/custom-routes/v1/advertisments" /> */}
        {/* <Ad2 />
        <SectionTitle title="پیشنهادهای هفته" collapse="SpecialOffersWrapepr" />
        <div className="SpecialOffersWrapepr">
          <SpecialOffers uri="/custom-routes/v1/advertisments" sale={false} />
          <SpecialOffers
            ltr={true}
            uri="/custom-routes/v1/advertisments"
            sale={false}
          />
          <SpecialOffers uri="/custom-routes/v1/advertisments" sale={false} />
        </div>
        <SectionTitle
          title="فروشندگان برتر هفته"
          collapse="AdvertisersToggler"
        />
        <Advertisers />
        <Seperator />
        <Footer /> */}
      </>
    );
  }
}
