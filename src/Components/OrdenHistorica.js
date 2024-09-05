import * as React from 'react';

//Styles
import '../styles/ordenHistorica.css';
//Materials
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function OrdenHistorica({product, onRepeatOrder}){
    const totalPrice = product.items.reduce((total, item) => total + (item.price * item.quantity), 0);

    const formattedDate = new Date(product.orderDate).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

    return(
        <Box className='BoxItem'>
            <Box>
                <Typography variant='overline'>Fecha: {formattedDate} </Typography>
                <Box className='BoxDescription'>
                    {product.items.map((item) =>
                        <Box key={item._id} sx={{ display: 'flex', gap: '20px' }}>
                            <Typography variant='overline'>
                            {item.itemName}
                            </Typography>
                            <Typography variant='overline'>${item.price.toFixed(2)}</Typography>
                            <Typography variant='overline'>Qty: {item.quantity}</Typography>
                        </Box>
                    )}
                    <Box sx={{display:'flex',gap:'20px'}}>
                        <Typography variant='overline' sx={{ fontWeight: 'bold' }}>Total Price: ${product.totalAmount.toFixed(2)}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}