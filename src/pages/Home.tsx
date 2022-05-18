import React, { useEffect, useState } from 'react';
import { CircularProgress, TextField } from '@mui/material';
import './Home.css';
import { Link } from 'react-router-dom';
import LocationCard from '../components/cards/locationCard';
import useStore from '../stateStore/store';
import DropDown from '../components/utils/dropdown';
import filter from '../components/utils/filter';

interface ILocation {
  id:string;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

function Home() {
  const { locations, getLocations, locationsLoad } = useStore();

  const [optionsTypes, setOptionsTypes] = useState(['']);
  const [type, setType] = useState('');
  const [optionsDim, setOptionsDim] = useState(['']);
  const [dimensions, setDimensions] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [filterdResult, setFilteredResults] = useState([{
    id: '', name: '', type: '', dimension: '', residents: [],
  }]);

  useEffect(() => {
    document.title = 'Home - Rick and Morty Catalogue';
    getLocations();
    const optionTypes = new Set<string>();
    const optionDimensions = new Set<string>();

    locations.forEach((location:ILocation) => {
      optionTypes.add(location.type);
      optionDimensions.add(location.dimension);
    });
    setOptionsTypes(Array.from(optionTypes));
    setOptionsDim(Array.from(optionDimensions));

    setFilteredResults(filter(locations, type, dimensions, searchKey));
  }, [getLocations, locations, type, dimensions, searchKey]);

  return (
    <div className="home">

      <div className="homeContent">
        <h1>Rick and Morty Locations</h1>
        <div className="filter">
          <div className="filterParam">
            <h4>Search:</h4>
            <TextField
              variant="outlined"
              label="Search for a location.."
              value={searchKey}
              onChange={(event) => setSearchKey(event.target.value)}
              InputLabelProps={{
                sx: {
                  color: 'white',
                },
              }}
              sx={{
                width: 150,
                marginLeft: 1,
                backgroundColor: '#3c3e44',
                input: { color: 'white' },
              }}
            />
          </div>
          <div className="filterParam">
            <h4>Filter by Type:</h4>
            <DropDown value={type} setValue={setType} options={optionsTypes.sort()} label="Types" />
          </div>
          <div className="filterParam">
            <h4>Filter by Dimension:</h4>
            <DropDown value={dimensions} setValue={setDimensions} options={optionsDim.sort()} label="Dimensions" />
          </div>
        </div>
        {locationsLoad
          ? (
            <div className="locationCards">
              {filterdResult
                .sort((x, y) => { if (x.name > y.name) return 1; return -1; })
                .map((location:ILocation) => (
                  <Link to={`/location/${location.id}`} style={{ textDecoration: 'none' }}>
                    <div>
                      <LocationCard location={location} />
                    </div>
                  </Link>
                ))}
            </div>
          )
          : (
            <div className="locationLoad">
              <CircularProgress />
            </div>
          )}
      </div>
    </div>
  );
}

export default Home;
