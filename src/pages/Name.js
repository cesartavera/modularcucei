import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
//Materials
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Name(){
    //declaracion de nombre
    const [name, setName]= React.useState('');
    const [error, setError] = React.useState(false);
    //decalaracion de navegacion entre paginas
    const location = useLocation();
    const navigate = useNavigate();
    const handleNavigatePrevious = () =>{
        navigate('/Email');
    };
    const handleNext = () =>{
        if (name.trim() === '') {
            setError(true);
        } else {
            navigate('/Newpassword', {state:{email: location.state.email, name}});
        }
    };

    return(
        <Box>
            <Typography variant='h6' sx={{fontWeight:'bold', marginLeft:'3vw', marginTop:'3vw'}}>What's your name?</Typography>
            <Typography variant='subtitle2' sx={{marginLeft:'3vw'}}>Let us know how to properly address you</Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginLeft:'3vw', marginRight:'7vw'}}>
                <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 0.8 }} />
                <TextField 
                    autoFocus
                    required
                    margin='dense'
                    id="nameWelcome" 
                    name='nameWelcome'
                    label="Name"
                    fullWidth 
                    variant='standard'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    helperText={error ? 'El campo no puede estar vacío' : ''}
                />
            </Box>
            <Box sx={{display:'flex', position:'absolute', bottom:'0', justifyContent:'space-between', width:'85%', marginLeft:'30px', marginBottom:'15px'}}>
                <IconButton onClick={handleNavigatePrevious}>
                    <ArrowBackIcon/>
                </IconButton>
                <Button onClick={handleNext} variant='contained' endIcon={<ArrowForward/>}>Next</Button>
            </Box>
        </Box>
    );
}

export default Name;