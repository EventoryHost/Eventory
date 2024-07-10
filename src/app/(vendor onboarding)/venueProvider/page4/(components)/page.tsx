"use client";
import React from 'react';
import { useState } from 'react';
import PriceSlider from './priceSlider';



const page = () => {
  const [value1, setValue1] = useState([10, 50]);
  const [value2, setValue2] = useState([20, 70]);
  const [value3, setValue3] = useState([30, 90]);

  const handleChange1 = (event: Event, newValue: number | number[]) => {
    setValue1(newValue as number[]);
    console.log('value1', value1)
  };

  const handleChange2 = (event: Event, newValue: number | number[]) => {
    setValue2(newValue as number[]);
    console.log('value2', value2)
  };

  const handleChange3 = (event: Event, newValue: number | number[]) => {
    setValue3(newValue as number[]);
    console.log('value3', value3)
  };


  return (
     <div className="justify-center flex w-[90vw]">
       <h1>Price Sliders</h1>
      <PriceSlider value={value1} onChange={handleChange1} />
      <PriceSlider value={value2} onChange={handleChange2} />
      <PriceSlider value={value3} onChange={handleChange3} />
     </div>
  );
}

export default page