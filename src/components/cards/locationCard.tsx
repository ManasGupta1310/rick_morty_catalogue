import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './locationCard.css';

function LocationCard({ location }: any) {
  return (
    <Card sx={{ width: 350, minHeight: 150 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary">
          <div className="locationContent">
            <div className="locationLine">
              <div className="value" style={{ fontSize: 20, fontWeight: 600, fontStyle: 'italic' }}>{location.name}</div>
            </div>
            <div className="locationLine">
              <div className="heading"><b>Type: </b></div>
              {' '}
              <div className="value">{location.type}</div>
            </div>
            <div className="locationLine">
              <div className="heading"><b>Dimension: </b></div>
              {' '}
              <div className="value">{location.dimension}</div>
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LocationCard;
