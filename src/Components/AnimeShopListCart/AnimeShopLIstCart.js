import React from 'react';
import "./AnimeShopListCart.css";

const AnimeShopLIstCart = ({ anime }) => {
    console.log(anime);
    // console.log(anime.images.jpg.image_url);

    return (
        <div>
            <div>
                <h5>{anime.title}</h5>
            </div>
            <img src={anime.images.jpg.image_url} alt="" />
            <div>
                <p>Score: {anime.score}</p>
                <p>Score: {anime.type}</p>
                <p>Score: {anime.rating}</p>
                <p>Score: {anime.duration}</p>
                <p>Score: {anime.duration}</p>
                <p>Score: {anime.episodes}</p>
                <p>Score: {anime.background}</p>
            </div>
        </div>
    );
};

export default AnimeShopLIstCart;