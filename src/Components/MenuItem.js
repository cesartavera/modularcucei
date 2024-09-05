
import * as React from 'react';
import { useCart } from './CartContext';
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


export default function MenuItem({product}){
    const { dispatch } = useCart();

    const [quantity, setQuantity] = React.useState(0);

    const handleAdd = () =>{
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleRemove = () =>{
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const handleAddToCart = () =>{
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: product.id,
                name: product.name,
                description: product.description,
                image: product.image,
                price: product.price,
                quantity: quantity,
                instanceId: new Date().getTime(),
            },
        });
        setQuantity(0)
    };

    return(
        <Box className='BoxItem'>
            <img src={product.image} alt={product.name} id='menuItem'/>
            <Divider  orientation='vertical' flexItem/>
            <Box>
                <Box className='BoxDescription'>
                    <Box sx={{display:'flex',gap:'20px'}}>
                    <Typography variant='overline'sx={{fontWeight:'bold'}}>{product.name}</Typography>
                    <Typography variant='overline'>${product.price}</Typography>
                    </Box>
                    <Typography variant='caption'>{product.description}</Typography>
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
                    <IconButton aria-label='addCar' onClick={handleAddToCart}>
                        <LocalGroceryStoreIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}