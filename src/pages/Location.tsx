import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import './Location.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import CharacterCard from '../components/cards/characterCard';

function Location() {
  const [location, setLocation] = useState({
    name: '', url: '', id: '', residents: [''],
  });
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    document.title = `${location.name} - Rick and Morty Catalogue`;
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => {
        setLocation(res.data);
        setLoaded(true);
      });
  }, [setLocation, setLoaded, id, location]);

  return (
    <div className="location">
      {loaded
        ? (
          <div className="locationInfo">
            <h1>Rick and Morty Locations</h1>
            <h1 style={{ fontWeight: '300' }}>{location.name}</h1>
            <div className="residents">
              {location.residents.map((resident) => (
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
