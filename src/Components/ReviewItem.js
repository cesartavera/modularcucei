import * as React from 'react';
//Materials
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
//Assets
import PeopleDinner from '../assets/images/peopleDinner.jpg';

export default function ReviewItem(){
    return(
        <Card sx={{width:'auto', bgcolor:'#F6F6F6'}}>
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
                image={PeopleDinner}
                alt='placeholderImg'
            />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:'flex-end'}}>
                    <IconButton aria-label='add to favorites'>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label='share'>
                        <ShareIcon />
                    </IconButton>
            </CardActions>
        </Card>
    );
}