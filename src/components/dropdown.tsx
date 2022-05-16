import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function DropDown({
  value, options, setValue, label,
}:any) {
  return (
    <FormControl sx={{ m: 1, width: 150 }} size="small">
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        label={label}
        onChange={(event: SelectChangeEvent) => setValue(event.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option:any) => <MenuItem value={option}>{option}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

export default DropDown;
