import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
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
      <Card sx={{
        width: 300, backgroundColor: '#3c3e44', color: '#ffffff', borderRadius: 5,
      }}
      >
        <div className="characterContent">
          <div>
            <Avatar src={character.image} alt={character.name} sx={{ height: 150, width: 150 }} />
          </div>
          <Typography variant="h5">
            {character.name}
          </Typography>
          <div className="stats">
            <div className="statsLine">
              <Typography variant="body1" color="#9e9e9e" className="statHeading">
                Status:
              </Typography>
              <Typography
                variant="body1"
                className="statValue"
                sx={{
                  display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                }}
              >
                {character.status}
                <CircleIcon fontSize="small" sx={{ color: character.status === 'Alive' ? '#7CFC00' : '#ff0000', padding: '0px 5px' }} />
              </Typography>
            </div>
            <div className="statsLine">
              <Typography variant="body1" color="#9e9e9e" className="statHeading">
                Gender:
              </Typography>
              <Typography variant="body1" className="statValue">
                {character.gender}
              </Typography>
            </div>
            <div className="statsLine">
              <Typography variant="body1" color="#9e9e9e" className="statHeading">
                Species:
              </Typography>
              <Typography variant="body1" className="statValue">
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
