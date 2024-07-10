import React from "react";
import { Categories } from "./(components)/categories";
import { Featured } from "./(components)/featured";
import { Partner } from "./(components)/partner";
import Works from "./(components)/works";
import Hero from "./(components)/hero";
import { Horizontal } from "./(components)/horizontal";
import Footer from "./(components)/footer";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero />
      <Partner />
      <Works />
      <Categories />
      <Featured />
      <Footer />
    </div>
  );
};

export default page;
