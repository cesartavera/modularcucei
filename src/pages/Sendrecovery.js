import * as React from 'react';
//Materials
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import ArrowForward from '@mui/icons-material/ArrowForward';

function Sendrecovery(){
    //declaracion de correo electronico
    const [email, setEmail]= React.useState('');
    const [error, setError] = React.useState(false);

    return(
        <Box>
            <Typography variant='h6' sx={{fontWeight:'bold', marginLeft:'3vw', marginTop:'3vw'}}>Enter your email</Typography>
            <Typography variant='subtitle2' sx={{marginLeft:'3vw', marginTop:'1vw'}}>We will send you a recovery email ASAP</Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginLeft:'3vw', marginRight:'7vw'}}>
                <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.8 }} />
                <TextField 
                    autoFocus
                    required
                    margin='dense'
                    id="emailRecovery" 
                    name='emailRecovery'
                    label="Email"
                    fullWidth 
                    variant='standard'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    helperText={error ? 'El campo no puede estar vacío' : ''}
                />
            </Box>
            <Box sx={{display:'flex', position:'absolute', bottom:'0', justifyContent:'space-between', width:'85%', marginLeft:'30px', marginBottom:'15px'}}>
                <Button variant='contained' endIcon={<ArrowForward/>}>Send</Button>
            </Box>
        </Box>
    );
}

export default Sendrecovery;