import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
//Materials
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import KeyIcon from '@mui/icons-material/Key';
import ArrowForward from '@mui/icons-material/ArrowForward';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Alert from '@mui/material/Alert';

function Newpassword(){
    //declaracion de valores contraseña
    const [password, setPassword]= React.useState('');
    const [error, setError] = React.useState(false);
    const location = useLocation();
    
    //declaracion de valores confirmacion de contraseña
    const [passwordConfirmation, setPasswordConfirmation]= React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');

    //declaracion de navegacion entre paginas
    const navigate = useNavigate();
    const handleNavigatePrevious = () =>{
        navigate('/Name');
    };
    const handleNext = async () =>{
        if (password.trim() === '') {
            setError(true);
            setErrorMessage('El campo no puede estar vacio');
        } else if (password === passwordConfirmation){
            try{
                const response = await fetch('http://192.168.100.5:4000/user-profile/register', {
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: location.state.email,
                        nombre: location.state.name,
                        password
                    })
                });

                const data = await response.json();//

                if(data.valid){
                    localStorage.setItem('token',data.token);
                    navigate('/Home');
                }
            } catch(error){
                console.error('Error: ', error);
            }
        } else {
            setError(true);
            setErrorMessage('La contraseña no coincide en ambos campos');
        }
    };
    //declaracion de proteccion de contraseña
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return(
        <Box>
            <Typography variant='h6' sx={{fontWeight:'bold', marginLeft:'3vw', marginTop:'3vw'}}>Enter your new password</Typography>
            {error && <Alert severity="error" sx={{ marginLeft: '3vw', marginRight: '3vw', marginTop: '1vw' }}>{errorMessage}</Alert>}
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginLeft:'3vw', marginRight:'7vw'}}>
                <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.8 }} />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="password"> New Password</InputLabel>
                    <Input
                        autoFocus
                        required
                        margin='dense'
                        id="newpassword"
                        name='newpassword'
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginLeft:'3vw', marginRight:'7vw'}}>
                <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.8 }} />
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="password">New Password Confirmation</InputLabel>
                    <Input
                        autoFocus
                        required
                        margin='dense'
                        id="newpassword"
                        name='newpassword'
                        fullWidth
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
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

export default Newpassword;