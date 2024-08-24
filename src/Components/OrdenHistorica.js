import * as React from 'react';
//Styles
import '../styles/ordenHistorica.css';
//Materials
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function OrdenHistorica(){
    return(
        <Box className='ordenHistoricaCard'>
            <Box className='products'>
                <Typography>Pizza Peperoni</Typography>
                <Typography>Burguer</Typography>
                <Typography>Coca 600ml</Typography>
            </Box>
            <Box sx={{display:'flex', marginRight:'3vw'}}>
                <Button variant='contained' endIcon={<SendIcon />} sx={{marginLeft:'auto', marginBottom:'2vw'}}>Send</Button>
            </Box>
        </Box>
    );
}