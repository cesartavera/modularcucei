import * as React from 'react';
//Styles
import '../styles/home.css';
//Components
import SimpleBottomNavigation from '../Components/SimpleBottomNavigation';
import ImageAvatars from '../Components/SimpleTopNavigation';
import ReviewItem from '../Components/ReviewItem';
//Materials
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
//Assets
import OrdenaYa from '../assets/images/oy-icon.jpg'

function Home(){
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
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <div style={{height:'60px'}}></div>
            </body>
            <footer>
                <SimpleBottomNavigation />
            </footer>
        </div>
    );
}

export default Home;