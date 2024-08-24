import * as React from 'react';
import { Link } from 'react-router-dom';
//Materials
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//Assets
import Pizza from '../assets/images/pizza.jpg';
import Historia from '../assets/images/historia.jpg';
import Combo from '../assets/images/combo.jpg';

export default function ImageAvatars() {
  return (
    <Stack direction="row" justifyContent="space-evenly" width={'auto'} marginTop={'18vw'} marginBottom={'3vw'}>
      <Link to={'/Menu'} style={{textDecoration:'none'}}>
        <Box textAlign={'center'}>
          <Avatar alt="Menu" src={Pizza}></Avatar>
          <Typography variant='caption' color='text.secondary'>Menu</Typography> 
        </Box>
      </Link>
      <Link to={'/Combos'} style={{textDecoration:'none'}}>
        <Box textAlign={'center'}>
          <Avatar alt="Promos" src={Combo}/>
          <Typography variant='caption' color='text.secondary'>Combos</Typography>
        </Box>
      </Link>
      <Link to={'/Historia'} style={{textDecoration:'none'}}>
        <Box textAlign={'center'}>
          <Avatar alt="Hisoria" src={Historia} />
          <Typography variant='caption' color='text.secondary'>Historia</Typography>
        </Box>
      </Link> 
        
    </Stack>
  );
}