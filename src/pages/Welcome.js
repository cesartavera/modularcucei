import * as React from 'react';
import { useNavigate } from 'react-router-dom';
//Styles
import '../styles/welcome.css';
//Materiales
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
//Assets
import FastFood from '../assets/images/FastFood.jpg';
import OrdenaYa from '../assets/images/oy-icon.jpg';


function Welcome(){
    //Declaracion de variables para navegacion
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/Email');
    };
    
    return(
        <div className='welcomePage'>
            <img src={FastFood} alt='FastFood' id='FastFood' />
            <Avatar alt='OrdenaYa' src={OrdenaYa} sx={{width:'50vw', height:'50vw', margin:'10vw'}}/>
            <Typography variant='h6' sx={{position:'absolute', top:'78%', marginLeft:'5vw', color:'#30323B'}}>Get started with Ordena Ya!</Typography>
            <Button onClick={handleNavigate} variant='contained' endIcon={<ArrowForwardIcon />} sx={{width:'80%', position:'absolute', top:'85%', marginLeft:'5vw'}}>Continue</Button>
        </div>
    );
}

export default Welcome;