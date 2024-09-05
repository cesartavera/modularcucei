import * as React from 'react';
import { useCart } from '../Components/CartContext';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useEffect } from 'react';
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
    const token = localStorage.getItem('token');
    let decodedToken = null;

    if(token){
        try{
            decodedToken = jwtDecode(token);
        } catch(error){
            console.error('Error decoding token: ', error);
        }
    }

    const { cart, dispatch } = useCart();

    const handleRemoveFromCart = (instanceId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { instanceId } });
    };

    const handleSubmit = () =>{
        // Obtener el totalAmount sumando los precios de los productos
        const totalAmount = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

        const orderData = {
            email: decodedToken.email, // Reemplaza con el ID del usuario real
            items: cart.map(product => ({
                itemName: product.name,
                quantity: product.quantity,
                price: product.price
            })),
            totalAmount,
            paymentMethod: 'credit_card', // Reemplaza con el método de pago real
            notes: '' // Reemplaza con notas si es necesario
        };

        fetch('http://192.168.100.5:4000/menu-routes/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
        .then(response => {
            // Verifica el tipo de contenido
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                console.log(decodedToken.email);
                return response.json(); // Parsear JSON si el tipo de contenido es JSON
            } else {
                return response.text();
            }
        })
        .then(data => {
            console.log('Order saved:', data);
            // Limpiar el carrito después de guardar la orden
            dispatch({ type: 'CLEAR_CART' });
            window.location.reload();
        })
        .catch(error => console.error('Error saving order:', error));
    };

    const [orders, setOrders] = useState([]);
    const emailUser = decodedToken.email;

    useEffect(() => {
        const fetchOrders = async () => {
          try {
            const response = await fetch(`http://192.168.100.5:4000/menu-routes/orders/${emailUser}`);
            if (!response.ok) {
              throw new Error('Failed to fetch orders');
            }
            const data = await response.json();
            setOrders(data.orders);
            console.log('hola');
          } catch (error) {
            console.error('Error fetching orders:', error);
          }
        };
        fetchOrders();
      }, [emailUser]);

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
            <main>
                <ImageAvatars />
                <Typography variant='h4' color={'#30323B'} textAlign={'center'}>Ordenes</Typography>
                <Divider textAlign='left'>
                    <Typography variant='h6' color={'#30323B'}>Actual</Typography>
                </Divider>
                {cart.map((product) => (
                    <OrdenActual key={product.instanceId} product={product} onRemove={handleRemoveFromCart} />
                ))}
                <Box sx={{display:'flex', marginRight:'3vw'}}>
                    <Button variant="contained" endIcon={<SendIcon />} sx={{marginLeft:'auto'}} onClick={handleSubmit}>
                        Send
                    </Button>
                </Box>
                <Divider textAlign='left'>
                    <Typography variant='h6' color={'#30323B'}>Historica</Typography>
                </Divider>
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <OrdenHistorica key={order._id} product={order}/>
                    ))
                ) : (
                    <Typography variant='body1' color={'#30323B'} textAlign={'center'}>No hay órdenes históricas.</Typography>
                )}
                <div style={{height:'60px'}}></div>
            </main>
            <footer>
                <SimpleBottomNavigation />
            </footer>
        </div>
    );
}

export default Ordenes;