import * as React from 'react';
import { useCart } from './CartContext';
//Styles
import '../styles/ordenActual.css';
//Materials
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';

export default function OrdenActual({product, onRemove}){
    const { dispatch } = useCart();

    const handleAdd = () =>{
        dispatch({
            type: 'ADD_TO_CART',
            payload: { ...product, quantity: 1 } // Aumenta la cantidad del producto
        });
    };

    const handleRemove = () =>{
        if (product.quantity > 1) {
            dispatch({
                type: 'ADD_TO_CART',
                payload: { ...product, quantity: -1 } // Reduce la cantidad del producto
            });
        } else {
            onRemove(product.id); // Eliminar producto si la cantidad es 0
        }
    };

    const handleDelete = () =>{
        onRemove(product.instanceId);
    };

    const totalPrice = product.price * product.quantity;

    return(
        <Box className='BoxItem'>
            <img src={product.image} alt={product.name} id='menuItem'/>
            <Divider  orientation='vertical' flexItem/>
            <Box>
                <Box className='BoxDescription'>
                    <Box sx={{display:'flex',gap:'20px'}}>
                        <Typography variant='overline'sx={{fontWeight:'bold'}}>{product.name}</Typography>
                        <Typography variant='overline'>${totalPrice}</Typography>
                    </Box>
                    <Typography variant='caption'>{product.description}</Typography>
                </Box>
                <Box className='Buttons'>
                    <IconButton aria-label='add' size='small' onClick={handleAdd}>
                        <AddCircleOutlineIcon fontSize='small'/>
                    </IconButton>
                    <Box className='itemCount'>
                        <Typography variant='body2'color='text.secondary'>{product.quantity}</Typography>
                    </Box>
                    <IconButton aria-label='remove' size='small' onClick={handleRemove}>
                        <RemoveCircleOutlineIcon fontSize='small'/>
                    </IconButton>
                    <IconButton aria-label='addCar' onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}