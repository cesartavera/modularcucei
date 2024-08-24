
import * as React from 'react';
//Styles
import '../styles/menuItem.css';
//Materials
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Divider from '@mui/material/Divider';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
//Assets
import Pizza from '../assets/images/pizza.jpg';

export default function MenuItem(){
    const [quantity, setQuantity] = React.useState(0);

    const handleAdd = () =>{
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleRemove = () =>{
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const handleDelete = () =>{
        setQuantity(0);
    };

    const handleSubmit = () =>{
        console.log(quantity);
    }

    return(
        <Box className='BoxItem'>
            <img src={Pizza} id='menuItem'/>
            <Divider  orientation='vertical' flexItem/>
            <Box>
                <Box className='BoxDescription'>
                    <Typography variant='overline'>Pizza Peperoni</Typography>
                    <Typography variant='caption'>Pizza Peperoniasasa</Typography>
                </Box>
                <Box className='Buttons'>
                    <IconButton aria-label='add' size='small' onClick={handleAdd}>
                        <AddCircleOutlineIcon fontSize='small'/>
                    </IconButton>
                    <Box className='itemCount'>
                        <Typography variant='body2'color='text.secondary'>{quantity}</Typography>
                    </Box>
                    <IconButton aria-label='remove' size='small' onClick={handleRemove}>
                        <RemoveCircleOutlineIcon fontSize='small'/>
                    </IconButton>
                    <IconButton aria-label='addCar' onClick={handleDelete}>
                        <LocalGroceryStoreIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}