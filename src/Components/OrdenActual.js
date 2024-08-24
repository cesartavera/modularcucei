import * as React from 'react';
//Styles
import '../styles/ordenActual.css';
//Materials
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

export default function OrdenActual(){
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
        <Box className='ordenActualCard'>
            <Box className='product'>
                <Typography variant='overline'>Pizza Peperoni</Typography>
            </Box>
            <Box className='botonesOrdenActual'>
                <IconButton aria-label='add' size='small' onClick={handleAdd}>
                    <AddCircleOutlineIcon fontSize='small'/>
                </IconButton>
                <Box className='itemCountOrden'>
                    <Typography variant='body2'color='text.secondary'>{quantity}</Typography>
                </Box>
                <IconButton aria-label='remove' size='small' onClick={handleRemove}>
                    <RemoveCircleOutlineIcon fontSize='small'/>
                </IconButton>
                <IconButton aria-label='addCar' onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Box>
    );
}