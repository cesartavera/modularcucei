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
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await fetch('http://192.168.100.5:4000/menu-routes/products');
                const data = await response.json();
                setProducts(data.products);
            } catch(error) {
                console.error('Error fetching products: ', error);
            }
        };

        fetchProducts();
    }, []);

    const pizzas = products.filter(product => product.category=== 'Pizza');
    const burgers = products.filter(product => product.category === 'Hamburguesa');
    const alitas = products.filter(product => product.category === 'Alitas');
    const drinks = products.filter(product => product.category === 'Bebidas');

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
                <Typography variant='h4' color={'#30323B'} textAlign={'center'}>Menu</Typography>
                <Divider />
                <Divider textAlign='left'>
                    <Typography variant='h6' color={'#30323B'}>Pizzas</Typography>
                </Divider>
                {pizzas.map((product) => (<MenuItem  key={product._id} product={product}/>))}
                <Divider textAlign='left'>
                    <Typography variant='h6' color={'#30323B'}>Burguers</Typography>
                </Divider>
                {burgers.map((product) => (<MenuItem  key={product._id} product={product}/>))}
                <Divider textAlign='left'>
                    <Typography variant='h6'color={'#30323B'}>Alitas</Typography>
                </Divider>
                {alitas.map((product) => (<MenuItem  key={product._id} product={product}/>))}
                <Divider textAlign='left'>
                    <Typography variant='h6'color={'#30323B'}>Bebidas</Typography>
                </Divider>
                {drinks.map((product) => (<MenuItem  key={product._id} product={product}/>))}
                <div style={{height:'60px'}}></div>
            </main>
            <footer>
                <SimpleBottomNavigation />
            </footer>
        </div>
    );
}

export default Menu;