"use client";

import React from "react";
import Grow from "./(components)/grow";
import Hero from "./(components)/hero";
import Section3 from "./(components)/section3";
import Form from "./(components)/form";
import Footer from "../(components)/footer";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="">
      <Hero />
      <Grow />
      <Section3 />
      <Form />
      <Footer />
    </div>
  );
};

export default page;
