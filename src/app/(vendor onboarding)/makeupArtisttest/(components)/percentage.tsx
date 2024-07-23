import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface PercentageProps {
  initialValue: number;
  onChange: (value: number) => void;
}

const Percentage: React.FC<PercentageProps> = ({ initialValue, onChange }) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (event: Event, newValue: number | number[]) => {
    const newValueNumber = Array.isArray(newValue) ? newValue[0] : newValue;
    setValue(newValueNumber);
    onChange(newValueNumber);
  };

  return (
    <Box sx={{ width: 330 }}>
      <Slider
        sx={{ color: "#2E3192" }}
        valueLabelDisplay="auto"
        size="small"
        value={value}
        onChange={handleChange}
        aria-label="Percentage Slider"
      />
    </Box>
  );
}

export default Percentage;
