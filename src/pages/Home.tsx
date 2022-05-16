import React, { useEffect, useState } from 'react';
import { CircularProgress, TextField } from '@mui/material';
import './Home.css';
import { Link } from 'react-router-dom';
import LocationCard from '../components/cards/locationCard';
import useStore from '../stateStore/store';
import DropDown from '../components/dropdown';

function Home() {
  const { locations, getLocations, locationsLoad } = useStore((state:any) => state);

  const [optionsTypes, setOptionsTypes] = useState(['']);
  const [type, setType] = useState('');
  const [optionsDim, setOptionsDim] = useState(['']);
  const [dimensions, setDimensions] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [filterdResult, setFilteredResults] = useState([]);

  useEffect(() => {
    document.title = 'Home - Rick and Morty Catalogue';
    getLocations();
    const optionTypes = new Set<string>();
    const optionDimensions = new Set<string>();

    locations.forEach((location:any) => {
      optionTypes.add(location.type);
      optionDimensions.add(location.dimension);
    });
    setOptionsTypes(Array.from(optionTypes));
    setOptionsDim(Array.from(optionDimensions));

    let filtered = locations;
    if (type !== '') {
      filtered = filtered.filter((location:any) => location.type === type);
    }

    if (dimensions !== '') {
      filtered = filtered.filter((location:any) => location.dimension === dimensions);
    }

    if (searchKey !== '') {
      filtered = filtered
        .filter((location:any) => location.name.toLowerCase().includes(searchKey.toLowerCase()));
    }
    setFilteredResults(filtered);
  }, [getLocations, locations, type, dimensions, searchKey]);

  return (
    <div className="home">
      {locationsLoad
        ? (
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
                  sx={{
                    width: 150, marginLeft: 1, color: '#ffffff', backgroundColor: '#3c3e44',
                  }}
                />
              </div>
              <div className="filterParam">
                <h4>Filter by Type:</h4>
                <DropDown value={type} setValue={setType} options={optionsTypes} label="Types" />
              </div>
              <div className="filterParam">
                <h4>Filter by Dimension:</h4>
                <DropDown value={dimensions} setValue={setDimensions} options={optionsDim} label="Dimensions" />
              </div>
            </div>
            <div className="locationCards">
              {filterdResult.map((location:any) => (
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
          <div className="locationsLoad">
            <CircularProgress />
          </div>
        )}
    </div>
  );
}

export default Home;
