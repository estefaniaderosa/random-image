import { useState, useEffect } from 'react';
import Axios from 'axios';
import randomWords from 'random-words';
import './Gallery.css';

const Gallery = () => {

    const [word, setWord] = useState('universe');
    const [images, setImages] = useState([]);
    const [error, setError] = useState(false)

    const getRandomWord = () => {
        return (
            setWord(randomWords({ exactly: 1, min: 4, max: 10 })[0])
        );
    }

    const unsplashID = 'V-dZO67VNZ3SAnsE1uw_m2i5beuD8AqgSvpgVffeesE';
    useEffect(() => {
        const url = `https://api.unsplash.com/search/photos?page=1&per_page=21&orientation=portrait&query=${word}&client_id=${unsplashID}`
        Axios.get(url)
            .then((response) => {
                if (response.data.results.length < 12) {
                    getRandomWord()
                }
                else {
                    setImages(response.data.results.length > 22 ? response.data.results.slice(0, 22) : response.data.results);
                }
            })
            .catch(() => {
                setError(true)
            })
    }, [word]);

    return (
        <div className="gallery-container">
            <button className="btn" onClick={getRandomWord}> {error ? 'Please wait a while & retry' : 'Search random images'}</button>
            <div className="images-container">
                {images.map((image, i) =>
                    <div className="grid-item-main-container" key={i}>
                        <div className="grid-item-container" >
                            <img className="grid-item" src={image.urls.small} alt={image.alt_description} />
                        </div>
                        <p className="title">{word} </p>
                        <p className="subtitle"> {image.user.name}</p>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Gallery
