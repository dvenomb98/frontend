import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

const options = [
  {
    value: 'dark',
    label: 'Dark',
  },
  { value: 'light', label: 'Light' },
  { value: 'system', label: 'System' },
];

const ThemeToggler = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <div className="flex items-center justify-between">
      <FormControl fullWidth>
        <InputLabel id="themeSwitch-label">Theme</InputLabel>
        <Select
          variant="outlined"
          labelId="themeSwitch-label"
          id="themeSwitch"
          name="theme"
          input={<OutlinedInput id="themeSwitch" label="Theme" />}
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ThemeToggler;
