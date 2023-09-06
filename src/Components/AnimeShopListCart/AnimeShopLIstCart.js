import React from 'react';
import "./AnimeShopListCart.css";

const AnimeShopLIstCart = ({ anime }) => {
    // console.log(anime);
    // console.log(anime.images.jpg.image_url);

    return (
        <div className='anime-shop-list-cart'>
            <div>
                <h3>{anime.title}</h3>
            </div>
            <img src={anime.images.jpg.image_url} alt="" />
            <div>
                <p>Score: {anime.score}</p>
                <p>Type: {anime.type}</p>
                <p>Rating: {anime.rating}</p>
                <p>Episodes: {anime.episodes}</p>
                <p>Duration: {anime.duration}</p>
                <p className='anime-shop-list-cart-detail'>Score: {anime.background}</p>
            </div>
        </div>
    );
};

export default AnimeShopLIstCart;