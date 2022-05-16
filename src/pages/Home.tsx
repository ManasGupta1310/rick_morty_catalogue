import React, { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import './Home.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import LocationCard from '../components/cards/locationCard';
import useStore from '../stateStore/store';

function Home() {
  const { locations, getLocations, locationLoad } = useStore((state:any) => state);
  // const [options, setOptions] = useState(['']);
  // const [type, setType] = React.useState('');
  // const [filterdResult, setResults] = useState({ results: [{ name: '', url: '', id: '' }] });

  // const handleTypeChange = (event: SelectChangeEvent) => {
  //   setType(event.target.value);
  //   if (event.target.value !== '') {
  //     setResults({
  //       results:
  //         locations.results.filter((location:any) => location.type === event.target.value),
  //     });
  //   } else {
  //     axios
  //       .get('https://rickandmortyapi.com/api/location')
  //       .then((res) => {
  //         setLocations(res.data);
  //         setResults(res.data);
  //       });
  //   }
  // };

  useEffect(() => {
    document.title = 'Home - Rick and Morty Catalogue';
    getLocations();
  }, [getLocations]);

  return (
    <div className="home">
      {locationLoad
        ? (
          <div className="homeContent">
            <h1>Rick and Morty Locations</h1>
            {/* <div className="filter">
              <h4>Filter by type:</h4>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Type</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={type}
                  label="Type"
                  onChange={handleTypeChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {options.map((option) => <MenuItem value={option}>{option}</MenuItem>)}
                </Select>
              </FormControl>
            </div> */}
            <div className="locationCards">
              {locations.map((location:any) => (
                <Link to={`/location/${location.id}`} style={{ textDecoration: 'none' }}>
                  <div>
                    <LocationCard location={location} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )
        : (
          <div className="locationLoad">
            <CircularProgress />
          </div>
        )}
    </div>
  );
}

export default Home;
