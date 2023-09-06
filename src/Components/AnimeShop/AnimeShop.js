import React from 'react';
import "./AnimeShop.css"
import AnimeShopList from '../AnimeShopList/AnimeShopList';
import AnimeShopCart from '../AnimeShopCart/AnimeShopCart';

const AnimeShop = ({ animes, addToWatchLaterBtn, watchLaterAnimes }) => {
    // console.log(animes);

    return (
        <div id='anime-shop'>
            <AnimeShopList animes={animes} addToWatchLaterBtn={addToWatchLaterBtn}></AnimeShopList>
            <AnimeShopCart watchLaterAnimes={watchLaterAnimes}></AnimeShopCart>
        </div >
    );
};

export default AnimeShop;