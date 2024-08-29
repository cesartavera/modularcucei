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


export default function ReviewItem({story}){
    const title = Array.isArray(story.title) ? story.title.join(' ') : story.title;
    const comments = Array.isArray(story.comments) ? story.comments.join(' ') : story.comments;

    const userImage = story.userProfileImage?.replace('localhost', '192.168.100.5');
    //const storyImage = story.imagenStory?.replace('localhost', '192.168.100.5');


    return(
        <Card sx={{width:'auto', bgcolor:'#F6F6F6'}}>
            <CardHeader 
                avatar={
                    <Avatar src={userImage} alt={"foto"} />
                }
                title={title}
                subheader={new Date(story.date).toLocaleDateString()}
            />
            <CardMedia 
                component='img'
                height='250vw'
                image={story.imagenStory}
                alt={title}
            />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    {comments}
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