import {useEffect, useState} from 'react';
import MemeCard from './MemeCard.js';
import Shimmer from './Shimmer.js';

const Body = function() {
    const [memes, setMemes] = useState(null)

    useEffect(()=> {
        fetchMemes();
    }, [])
    const fetchMemes = async () => {
        const data = await fetch('https://meme-api.com/gimme/20');
        const parsedData = await data.json();
        setMemes(parsedData.memes);
    }
    return (
        <>
        <div className="main-container">

          {!memes ? ( <Shimmer /> ) : ( memes.map((data)=> (
            <MemeCard key={data.title} data={data} />
          )))}
          
          </div>
        </>
    )
}

export default Body;