import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './characterCard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CharacterCard({ resident }: any) {
  const [residentInfo, setInfo] = useState({
    name: '', status: '', gender: '', image: '',
  });
  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setInfo(res.data));
  }, [setInfo, resident]);
  return (
    <Card sx={{
      width: 350, minHeight: 225, display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary">
          <div className="characterTile">
            <div className="characterContent">
              <div className="characterLine">
                <div className="value" style={{ fontSize: 20, fontWeight: 600, fontStyle: 'italic' }}>{residentInfo.name}</div>
              </div>
              <div className="characterLine">
                <div className="heading"><b>Status:</b></div>
                {' '}
                <div className="value">{residentInfo.status}</div>
              </div>
              <div className="characterLine">
                <div className="heading"><b>Gender: </b></div>
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
    </Card>
  );
}

export default CharacterCard;
