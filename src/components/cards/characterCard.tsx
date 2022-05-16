import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './characterCard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

function CharacterCard({ resident }: any) {
  const [residentInfo, setInfo] = useState({
    name: '', status: '', gender: '', image: '',
  });
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(resident)
      .then((res) => {
        setInfo(res.data);
        setLoaded(true);
      });
  }, [setInfo, resident]);
  return (
    <Card sx={{
      width: 350, minHeight: 225, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#3c3e44', borderRadius: 5,
    }}
    >
      {loaded ? (
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="#ffffff">
            <div className="characterTile">
              <div className="characterContent">
                <div className="characterLine">
                  <div className="value" style={{ fontSize: 20, fontWeight: 600, fontStyle: 'italic' }}>{residentInfo.name}</div>
                </div>
                <div className="characterLine">
                  <div className="heading" style={{ color: '#9e9e9e' }}><b>Status:</b></div>
                  {' '}
                  <div className="value">{residentInfo.status}</div>
                </div>
                <div className="characterLine">
                  <div className="heading" style={{ color: '#9e9e9e' }}><b>Gender: </b></div>
                  {' '}
                  <div className="value">{residentInfo.gender}</div>
                </div>
              </div>
              <div className="characterImage">
                <img src={residentInfo.image} alt={residentInfo.name} height={150} width={150} />
              </div>
            </div>
          </Typography>
        </CardContent>
      ) : <CircularProgress />}
    </Card>
  );
}

export default CharacterCard;
