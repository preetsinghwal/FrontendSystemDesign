import {useEffect, useState} from 'react';
import MemeCard from './MemeCard.js';
import Shimmer from './Shimmer.js';

const Body = function() {
    const [memes, setMemes] = useState([]);
    const [showShimmer, setShowShimmer] = useState(false);

    useEffect(()=> {
        fetchMemes();

        window.addEventListener('scroll', handleScroll);

        return()=> window.removeEventListener('scroll', handleScroll);
    }, [])


    const handleScroll = () => {
        if(window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            fetchMemes();
        }
    }

    const fetchMemes = async () => {
        setShowShimmer(true);
        const data = await fetch('https://meme-api.com/gimme/20');
        const parsedData = await data.json();

        setShowShimmer(false);
        setMemes((prevData)=> [...prevData, ...parsedData.memes] );
    }
    return (
        <>
        <div className="main-container">

          {memes.map((data)=> (
            <MemeCard key={data.title} data={data} />
          ))}

          {showShimmer && <Shimmer />}
          
          </div>
        </>
    )
}

export default Body;