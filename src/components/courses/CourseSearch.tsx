import { XMarkIcon } from '@heroicons/react/24/solid';
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { FC } from 'react';

interface CourseSearchProps {
  options: SearchTags[];
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const CourseSearch: FC<CourseSearchProps> = ({ options, searchValue, setSearchValue }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSearchValue(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="course-search-label">Filter</InputLabel>
      <Select
        labelId="course-search-label"
        id="course-search"
        label="Filter"
        value={searchValue}
        onChange={handleChange}
        sx={{ textTransform: 'capitalize' }}
        endAdornment={
          <IconButton
            sx={{ display: searchValue ? '' : 'none', mr: 3 }}
            onClick={() => setSearchValue('')}
          >
            <XMarkIcon className="w-5 h-5" />
          </IconButton>
        }
      >
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value} sx={{ textTransform: 'capitalize' }}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CourseSearch;
