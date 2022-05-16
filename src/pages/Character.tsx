import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import useStore from '../stateStore/store';
import './Character.css';

function Character() {
  const character = useStore((state:any) => state.character);
  const getCharacter = useStore((state:any) => state.getCharacter);
  const { id } = useParams();
  useEffect(() => {
    document.title = `${character.name} - Rick and Morty`;
    getCharacter(id);
  }, [getCharacter, id, character]);

  return (
    <div className="characterInfo">
      <Card sx={{ width: 300 }}>
        <div className="characterContent">
          <div>
            <Avatar src={character.image} alt={character.name} sx={{ height: 100, width: 100 }} />
          </div>
          <Typography variant="h5" color="text.primary">
            {character.name}
          </Typography>
          <div className="stats">
            <div className="statsLine">
              <Typography variant="body1" color="text.primary" className="statHeading">
                Status:
              </Typography>
              <Typography variant="body1" color="text.secondary" className="statValue">
                {character.status}
              </Typography>
            </div>
            <div className="statsLine">
              <Typography variant="body1" color="text.primary" className="statHeading">
                Gender:
              </Typography>
              <Typography variant="body1" color="text.secondary" className="statValue">
                {character.gender}
              </Typography>
            </div>
            <div className="statsLine">
              <Typography variant="body1" color="text.primary" className="statHeading">
                Species:
              </Typography>
              <Typography variant="body1" color="text.secondary" className="statValue">
                {character.species}
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Character;
