import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
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

    setFilteredResults(filtered);
  }, [getLocations, locations, type, dimensions]);

  return (
    <div className="home">
      {locationsLoad
        ? (
          <div className="homeContent">
            <h1>Rick and Morty Locations</h1>
            <div className="filter">
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
