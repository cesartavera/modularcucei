import * as React from 'react';
//Components
import SimpleBottomNavigation from '../Components/SimpleBottomNavigation';
import ImageAvatars from '../Components/SimpleTopNavigation';
import OrdenActual from '../Components/OrdenActual';
import OrdenHistorica from '../Components/OrdenHistorica';
//Materials
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
//Assets
import OrdenaYa from '../assets/images/oy-icon.jpg';

function Ordenes(){
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
                <Typography variant='h4' color={'#30323B'} textAlign={'center'}>Ordenes</Typography>
                <Divider textAlign='left'>
                    <Typography variant='h6' color={'#30323B'}>Actual</Typography>
                </Divider>
                <OrdenActual />
                <OrdenActual />
                <Box sx={{display:'flex', marginRight:'3vw'}}>
                    <Button variant="contained" endIcon={<SendIcon />} sx={{marginLeft:'auto'}}>
                        Send
                    </Button>
                </Box>
                <Divider textAlign='left'>
                    <Typography variant='h6' color={'#30323B'}>Historica</Typography>
                </Divider>
                <OrdenHistorica />
                <div style={{height:'60px'}}></div>
            </body>
            <footer>
                <SimpleBottomNavigation />
            </footer>
        </div>
    );
}

export default Ordenes;