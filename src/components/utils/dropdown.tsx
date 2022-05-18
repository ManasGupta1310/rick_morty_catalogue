import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  label: string;
  value: string;
  setValue: (value: string) => void;
  options: string[];
}
function DropDown({
  value, options, setValue, label,
}:Props) {
  return (
    <FormControl sx={{ m: 1, width: 150, color: 'white' }} size="small">
      <InputLabel sx={{ color: 'white' }}>{label}</InputLabel>
      <Select
        variant="filled"
        value={value}
        label={label}
        onChange={(event: SelectChangeEvent) => setValue(event.target.value)}
        sx={{ color: 'white', backgroundColor: '#3c3e44' }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option:string) => <MenuItem value={option}>{option}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

export default DropDown;
