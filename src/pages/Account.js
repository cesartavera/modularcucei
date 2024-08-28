import * as React from 'react';
import { jwtDecode } from 'jwt-decode';
//Styles
import '../styles/home.css';
import '../styles/account.css';
//Componentes
import SimpleBottomNavigation from '../Components/SimpleBottomNavigation';
import ImageAvatars from '../Components/SimpleTopNavigation';
import FormUserDialog from '../Components/FormUserDialog';
//Materiales
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
//Assets
import OrdenaYa from '../assets/images/oy-icon.jpg';

function Account(){
    const token = localStorage.getItem('token');
    let decodedToken = null;

    if(token){
        try{
            decodedToken = jwtDecode(token);
        } catch(error){
            console.error('Error decoding token: ', error);
        }
    }
    return(
        <div>
            <header>
                <div className='headerLabel'>
                    <h1>Ordena</h1>
                    <Avatar alt='OrdenaYa' src={OrdenaYa}/>
                    <h1>Ya!</h1>
                </div>
                <div>
                    <Divider textAlign='right'>UdeG</Divider>
                </div>
            </header>
            <body>
                <ImageAvatars />
                <Divider />
                <div className='UserAvatar'>
                    <Avatar alt='User Prueba' src={decodedToken?.imagenPerfil} sx={{width:'35vw', height:'35vw'}}/>   
                </div>
                <div className='infoUsuario'>
                    <div className='info'>
                        <Typography variant='overline'>Usuario: </Typography>
                        <Typography variant='caption'>{decodedToken?.nombre}</Typography>
                    </div>
                    <div className='info'>
                        <Typography variant='overline'>Correo: </Typography>
                        <Typography variant='caption'>{decodedToken?.email}</Typography>
                    </div>
                    <div className='info'>
                        <FormUserDialog />
                    </div>
                </div>
            </body>
            <footer>
                <SimpleBottomNavigation />
            </footer>
        </div>
    );
}

export default Account;