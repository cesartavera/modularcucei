import * as React from 'react';
//Components
import SimpleBottomNavigation from '../Components/SimpleBottomNavigation';
import ImageAvatars from '../Components/SimpleTopNavigation';
import MenuItem from '../Components/MenuItem';
//Materials
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
//Assets
import OrdenaYa from '../assets/images/oy-icon.jpg'


function Menu(){
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
                <Typography variant='h4' color={'#30323B'} textAlign={'center'}>Menu</Typography>
                <Divider />
                <Divider textAlign='left'>
                    <Typography variant='h6' color={'#30323B'}>Pizzas</Typography>
                </Divider>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <Divider textAlign='left'>
                    <Typography variant='h6' color={'#30323B'}>Burguers</Typography>
                </Divider>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <Divider textAlign='left'>
                    <Typography variant='h6'color={'#30323B'}>Bebidas</Typography>
                </Divider>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <div style={{height:'60px'}}></div>
            </body>
            <footer>
                <SimpleBottomNavigation />
            </footer>
        </div>
    );
}

export default Menu;