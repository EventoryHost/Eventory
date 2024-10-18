import React from "react";
import Footer from "../(components)/footer";
import Hero from "./(components)/hero";
import Story from "./(components)/story";
import ReachoutForm from "./(components)/reachoutForm";
import Faq from "./(components)/faq";
import Event from "./(components)/events";
import Moments from "./(components)/moments";
import Feed from "./(components)/hero_v2";
import WhyUs from "./(components)/WhyUs";

type Props = {};
const page = (props: Props) => {
  return (
    <div className="">
      {/* <Hero /> */}
      <Feed />
      <Story />
      <WhyUs />
      <Event />
      {/* <Moments /> */}
      <Faq />
      <ReachoutForm />
      <Footer />
    </div>
  );
};

export default page;
