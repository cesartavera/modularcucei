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
    const [stories, setStories] = React.useState([]);

    React.useEffect(() => {
        const fetchStories = async () => {
            try{
                const response = await fetch('http://localhost:4000/user-stories/stories');
                const data = await response.json();
                console.log('Response Text: ', data);
                
                setStories(data.stories);
            } catch(error){
                console.error('Error fetching stories: ', error);
            }
        };
        fetchStories();
    }, []);
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
                {stories.map((story, index) => (
                    <ReviewItem key={index} story={story} />
                ))}
                <div style={{height:'60px'}}></div>
            </body>
            <footer>
                <SimpleBottomNavigation />
            </footer>
        </div>
    );
}

export default Home;