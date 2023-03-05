import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ServiceType() {
  const [serviceType, setServiceType] = React.useState('');

  const handleChange = (event) => {
    setServiceType(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Service Type</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={serviceType}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"vector_artwork"}>Vector Artwork</MenuItem>
          <MenuItem value={"digitizing"}>Digitizing</MenuItem>
          <MenuItem value={"business_card"}>Business Card</MenuItem>
          <MenuItem value={"broucher"}>Broucher</MenuItem>
          <MenuItem value={"logo_design"}>Logo Design</MenuItem>
          <MenuItem value={"cartoon"}>Cartoon Box Design</MenuItem>
          <MenuItem value={"others"}>Others</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}