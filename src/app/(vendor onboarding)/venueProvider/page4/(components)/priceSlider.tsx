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
          min={0}
          max={500000}
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
