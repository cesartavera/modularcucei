import * as React from 'react';
//Components
import SimpleBottomNavigation from '../Components/SimpleBottomNavigation';
import ImageAvatars from '../Components/SimpleTopNavigation';
//Materials
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
//Assets
import HistoriaPic from '../assets/images/historia.jpg';
import OrdenaYa from '../assets/images/oy-icon.jpg'


function Historia(){
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
                <Card sx={{width:'auto'}}>
                    <CardHeader 
                        avatar={
                            <Avatar>
                                R
                            </Avatar>}
                        title='PlaceHolde Title'
                        subheader='Placeholder Date'
                    />
                    <CardMedia 
                        component='img'
                        height='250vw'
                        image={HistoriaPic}
                        alt='placeholderImg'
                    />
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{height:'60px'}}></div>
            </body>
            <footer>
                <SimpleBottomNavigation />
            </footer>
        </div>
    );
}

export default Historia;