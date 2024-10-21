import React from "react";
import { Categories } from "./(components)/categories";
import { Featured } from "./(components)/featured";
import { Partner } from "./(components)/partner";
import Works from "./(components)/works";
import Hero from "./(components)/hero";
import { Horizontal } from "./(components)/horizontal";
import Footer from "./(components)/footer";
import HowItWorks from "./(components)/hiw_v2";
import Featuredvendors from "./(components)/featuredVendors_v2";
import Nav from "./(components)/nav";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      {/* <Nav /> */}

      <Hero />
      <Partner />
      {/* <Works /> */}
      <HowItWorks />
      <Featuredvendors />
      <Categories />
      {/* <Featured /> */}
      <Footer />
    </div>
  );
};

export default page;
