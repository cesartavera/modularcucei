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
    const [page, setPage] = React.useState(1);
    const[hasMore, setHasMore] = React.useState(true);

    // Fetch stories from the backend based on the current page
    const fetchStories = async (currentPage) => {
        try {
        const response = await fetch(
            `http://192.168.100.5:4000/user-stories/stories?page=${currentPage}&limit=10`
        );
        const data = await response.json();

        // Update stories state, ensuring no duplication
        if (currentPage === 1) {
            setStories(data.stories); // On first page load, set stories directly
        } else {
            setStories((prevStories) => [...prevStories, ...data.stories]);
        }

        // Check if there are more stories to load
        setHasMore(data.stories.length > 0);
        } catch (error) {
        console.error('Error fetching stories: ', error);
        }
    };

    // Effect to load stories when page changes
    React.useEffect(() => {
        fetchStories(page);
    }, [page]);

    const loadMore = () => {
        if (hasMore) {
            setPage(prevPage => prevPage + 1);
        }
    };

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
                {stories.map((story, index) => (
                    <ReviewItem key={index} story={story} />
                ))}
                {hasMore && (
                    <button onClick={loadMore}>Load More</button>
                )}
                <div style={{height:'60px'}}></div>
            </main>
            <footer>
                <SimpleBottomNavigation />
            </footer>
        </div>
    );
}

export default Home;