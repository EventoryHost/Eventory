"use client";

import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type Props = {
  value: number[];
  onChange: (event: Event, newValue: number | number[]) => void;
};

function valuetext(value: number) {
  const units = ['Rs'];
  return `${units[0]} ${value}`;
}


const PriceSlider = ({ value, onChange }: Props) => {
  return (
    <div className="justify-center flex w-[90%]">
      <Box sx={{ width: 300 }}>
        
        <Slider sx={{color: '#2E3192',}}
          getAriaLabel={() => 'Price range'}
          value={value}
          // 0 is the min price
          min={0}
          // 10 lacs is the max price
          max={1000000}
          onChange={onChange}
          valueLabelDisplay="auto"
          valueLabelFormat={valuetext}
          getAriaValueText={valuetext}
        />
      </Box>
    </div>
  );
};

export default PriceSlider;
