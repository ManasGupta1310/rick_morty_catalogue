import React, { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import './Location.css';
import { Link, useParams } from 'react-router-dom';
import CharacterCard from '../components/cards/characterCard';
import useStore from '../stateStore/store';

function Location() {
  const { location, getLocation, locationLoad } = useStore();
  const { id } = useParams();

  useEffect(() => {
    document.title = `${location.name} - Rick and Morty Catalogue`;
    getLocation(id);
  }, [id, getLocation, location]);

  return (
    <div className="location">
      {locationLoad
        ? (
          <div className="locationInfo">
            <h1>Rick and Morty Locations</h1>
            <h1 style={{ fontWeight: '300' }}>{location.name}</h1>
            <div className="residents">
              {location.residents.map((resident:string) => (
                <Link to={`/character/${resident.split('/').slice(-1)}`} style={{ textDecoration: 'none' }}>
                  <div>
                    <CharacterCard resident={resident} />
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

export default Location;
