import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './locationCard.css';

interface Props {
  location:{
    name: string;
    type: string;
    dimension: string;
  }
}
function LocationCard({ location }: Props) {
  return (
    <Card sx={{
      width: 350, minHeight: 150, backgroundColor: '#3c3e44', borderRadius: 5,
    }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18, color: '#ffffff' }} color="text.secondary">
          <div className="locationContent">
            <div className="locationLine">
              <div className="value" style={{ fontSize: 20, fontWeight: 600, fontStyle: 'italic' }}>{location.name}</div>
            </div>
            <div className="locationLine">
              <div className="heading" style={{ color: '#9e9e9e' }}><b>Type:</b></div>
              <div className="value">{location.type}</div>
            </div>
            <div className="locationLine">
              <div className="heading" style={{ color: '#9e9e9e' }}><b>Dimension:</b></div>
              <div className="value">{location.dimension}</div>
            </div>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LocationCard;
