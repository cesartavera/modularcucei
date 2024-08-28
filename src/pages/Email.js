import * as React from 'react';
import { useNavigate } from 'react-router-dom';
//Materiales
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Alert from '@mui/material/Alert';

function Email(){
    //declaracion de correo electronico
    const [email, setEmail]= React.useState('');
    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //declaracion de navegacion entre paginas
    const navigate = useNavigate();
    const handleNavigatePrevious = () =>{
        navigate('/');
    };
    const handleNext = async () =>{
        if (email.trim() === ''){
            setError(true);
            setErrorMessage('El campo no puede estar vacio');
        }else if(emailRegex.test(email) === false){
            setError(true);
            setErrorMessage('Direccion con formato invalido');
        } else {
            try{
                const response = await fetch('http://localhost:4000/auth/validate-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email })
                });
                const data = await response.json();

                if (data.exists){
                    navigate('/Password', {state:{email}});
                } else {
                    navigate('/Name', {state:{email}});
                }
            } catch (error){
                console.error('Error: ', error);
            }
        }
    };
    
    return(
        <div>
            <Typography variant='h6' sx={{fontWeight:'bold', marginLeft:'3vw', marginTop:'3vw'}}>Enter your email address</Typography>
            <Typography variant='subtitle2' sx={{marginLeft:'3vw'}}>Add your email to find/suscribe you</Typography>
            {error && <Alert severity="error" sx={{ marginLeft: '3vw', marginRight: '3vw', marginTop: '1vw' }}>{errorMessage}</Alert>}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginLeft:'3vw', marginRight:'7vw'}}>
                <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.8 }} />
                <TextField 
                    autoFocus
                    required
                    margin='dense'
                    id="emailWelcome" 
                    name='emailWelcome'
                    label="Email"
                    fullWidth 
                    variant='standard'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Box>
            <Box sx={{display:'flex', position:'absolute', bottom:'0', justifyContent:'space-between', width:'85%', marginLeft:'30px', marginBottom:'15px'}}>
                <IconButton onClick={handleNavigatePrevious}>
                    <ArrowBackIcon/>
                </IconButton>
                <Button onClick={handleNext} variant='contained' endIcon={<ArrowForward/>}>Next</Button>
            </Box>
        </div>
    );
}

export default Email;